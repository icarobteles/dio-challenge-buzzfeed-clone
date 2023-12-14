import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { IQuestion } from "../../interfaces";

@Component({
  selector: "app-question",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./question.component.html",
  styleUrl: "./question.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent {
  @Input({ required: true }) question!: IQuestion;
  @Output() answerWasSelected = new EventEmitter<string>();

  handleAnswerClick(answerAlias: string): void {
    this.answerWasSelected.emit(answerAlias);
  }
}
