import { CommonModule, DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal
} from "@angular/core";
import { IQuiz } from "../../interfaces";
import { QuizService } from "../../services";
import { HttpClientModule } from "@angular/common/http";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [QuizService],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  quizzes = signal<IQuiz[]>([]);

  private quizService = inject(QuizService);

  ngOnInit(): void {
    this.quizService.loadAllQuizzes().subscribe({
      next: (quizzes: IQuiz[]) => this.quizzes.set(quizzes)
    });
  }
}
