import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-result",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./result.component.html",
  styleUrl: "./result.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent {
  @Input({ required: true }) message!: string;
  @Output() retakeQuiz = new EventEmitter();

  retakeQuizClick(): void {
    this.retakeQuiz.emit();
  }
}
