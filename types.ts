export enum TaskType {
  TASK_1 = 'Task 1: Writing an Email',
  TASK_2 = 'Task 2: Responding to Survey Questions',
}

export interface Question {
  id: string;
  type: TaskType;
  title: string;
  prompt: string;
  bullets?: string[]; // For Task 1
  options?: {         // For Task 2
    optionA: string;
    optionB: string;
  };
}

export interface EvaluationResult {
  bandScore: number;
  contentScore: number;
  vocabularyScore: number;
  grammarScore: number;
  taskFulfillmentScore: number;
  feedback: string;
  strengths: string[];
  weaknesses: string[];
  correctedVersion: string;
}

export interface TestSession {
  questionId: string;
  userResponse: string;
  timeSpentSeconds: number;
  date: string;
  evaluation?: EvaluationResult;
}