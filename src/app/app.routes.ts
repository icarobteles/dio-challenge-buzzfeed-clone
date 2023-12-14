import { Routes } from "@angular/router";
import { HomePageComponent, QuizPageComponent } from "./pages";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent
  },
  {
    path: "quizzes/:slug",
    component: QuizPageComponent
  }
];
