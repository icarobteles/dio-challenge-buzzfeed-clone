import { IAnswer } from "./answer.interface";

export interface IQuestion {
  id: number;
  question: string;
  options: IAnswer[];
}
