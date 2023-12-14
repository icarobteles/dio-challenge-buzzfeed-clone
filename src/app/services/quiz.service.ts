import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { IQuiz } from "../interfaces";
import { calculateTimeDifference } from "../utils";
import { IApiQuiz } from "../interfaces/quiz.interface";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  private baseUrl: string = "http://localhost:3000/quizzes";

  private httpClient = inject(HttpClient);

  public loadQuiz(quizSlug: string): Observable<IQuiz> {
    return this.httpClient
      .get<IApiQuiz[]>(`${this.baseUrl}?slug=${quizSlug}`)
      .pipe(
        map((value) => ({
          ...value[0],
          publishedAgo: calculateTimeDifference(value[0].createdAt)
        }))
      );
  }

  public loadAllQuizzes(): Observable<IQuiz[]> {
    return this.httpClient.get<IApiQuiz[]>(this.baseUrl).pipe(
      map((value) => {
        return value.map((item) => ({
          ...item,
          publishedAgo: calculateTimeDifference(item.createdAt)
        }));
      })
    );
  }
}
