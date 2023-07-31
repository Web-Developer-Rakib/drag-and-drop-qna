export interface IQuestions {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export const questions: IQuestions[] = [
  {
    id: 1,
    question: "My name is ___",
    answers: ["Sajid", "Sakib", "Sumon", "Asif", "Rakib"],
    correctAnswer: "Rakib",
  },
  {
    id: 2,
    question: "I am a ___",
    answers: ["Doctor", "Programmer", "Chef", "Lawyer", "Accountant"],
    correctAnswer: "Rakib",
  },
  {
    id: 3,
    question: "I am from ___",
    answers: ["India", "Bangladesh", "Canada", "United States", "Nepal"],
    correctAnswer: "Rakib",
  },
  {
    id: 4,
    question: "I am ___ years old",
    answers: ["26", "30", "25", "23", "28"],
    correctAnswer: "23",
  },
  {
    id: 5,
    question: "I love to play ___ years old",
    answers: ["Cricket", "Football", "Musical instrument", "Hockey", "Tennis"],
    correctAnswer: "Musical instrument",
  },
];
