import { IAuthor } from "./author.interface";
import { IQuestion } from "./question.interface";
import { IResult } from "./result.interface";

export interface IQuiz {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  publishedAgo: string;
  author: IAuthor;
  questions: IQuestion[];
  results: IResult;
}

export interface IApiQuiz extends Omit<IQuiz, "publishedAgo"> {
  createdAt: Date;
}
