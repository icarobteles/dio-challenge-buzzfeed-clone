import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal
} from "@angular/core";
import { QuizService } from "../../services";
import { IQuestion, IQuiz } from "../../interfaces";
import { ActivatedRoute } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { QuestionComponent, ResultComponent } from "../../components";

@Component({
  selector: "app-quiz",
  standalone: true,
  imports: [CommonModule, HttpClientModule, QuestionComponent, ResultComponent],
  providers: [QuizService],
  templateUrl: "./quiz.component.html",
  styleUrl: "./quiz.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizPageComponent implements OnInit {
  quiz = signal<IQuiz>({} as IQuiz);
  questions = computed(() => this.quiz().questions);
  maxQuestions = computed(() => this.questions().length);

  currentQuestionIndex = signal(0);
  currentQuestion = computed(() =>
    this.questions()
      ? this.questions()[this.currentQuestionIndex()]
      : ({} as IQuestion)
  );

  resultMessage = signal("");

  private recordOfAnswers: Map<string, number>;

  private quizService = inject(QuizService);
  private route = inject(ActivatedRoute);

  constructor() {
    this.recordOfAnswers = new Map<string, number>();
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get("slug")!;
    this.quizService.loadQuiz(slug).subscribe({
      next: (quiz) => this.quiz.set({ ...quiz })
    });
  }

  nextQuestion(): void {
    this.currentQuestionIndex.update((prevQuestionIndex) => {
      if (prevQuestionIndex < this.maxQuestions() - 1) {
        return prevQuestionIndex + 1;
      } else {
        // TODO: Redirecionar para tela de resultado.
        this.checkResult();
        return prevQuestionIndex;
      }
    });
  }

  handleAnswerSelected(alias: string): void {
    const prevCountAlias = this.recordOfAnswers.get(alias) ?? 0;
    this.recordOfAnswers.set(alias, prevCountAlias + 1);
    this.nextQuestion();
  }

  checkResult(): void {
    let highest;
    let tieCandidates: string[] = []; // Para armazenar os candidatos em caso de empate

    for (const [alias, count] of this.recordOfAnswers) {
      const highestCount = highest ? this.recordOfAnswers.get(highest) ?? 0 : 0;

      if (!highest || count > highestCount) {
        highest = alias;
        tieCandidates = [alias]; // Resetar a lista em caso de um novo valor mais alto
      } else if (count === highestCount) {
        // Empate, adicionar candidato à lista
        tieCandidates.push(alias);
      }
    }

    // Verificar se há um empate e sortear entre os candidatos
    if (tieCandidates.length > 1) {
      const randomIndex = Math.floor(Math.random() * tieCandidates.length);
      highest = tieCandidates[randomIndex];
    }

    this.resultMessage.set(this.quiz().results[highest!]);
  }

  resetResult(): void {
    this.recordOfAnswers.clear();
    this.resultMessage.set("");
  }

  resetQuiz(): void {
    this.resetResult();
    this.currentQuestionIndex.set(0);
  }

  handleRetakeQuiz(): void {
    this.resetQuiz();
  }
}
