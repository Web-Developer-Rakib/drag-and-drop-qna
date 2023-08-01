export interface IQuestions {
  id: number;
  question: string;
  answers: { answer: string; color: string }[];
  correctAnswer: string;
}

export const questions: IQuestions[] = [
  {
    id: 1,
    question: "My name is ___",
    answers: [
      { answer: "Sajid", color: "#FFD700" },
      { answer: "Sakib", color: "#00CED1" },
      { answer: "Sumon", color: "#FF8A14" },
      { answer: "Asif", color: "#FF14EF" },
      { answer: "Rakib", color: "#FFA07A" },
    ],
    correctAnswer: "Rakib",
  },
  {
    id: 2,
    question: "I am a ___",
    answers: [
      { answer: "Doctor", color: "#FFD700" },
      { answer: "Chef", color: "#00CED1" },
      { answer: "Programmer", color: "#FF8A14" },
      { answer: "Lawyer", color: "#FF14EF" },
      { answer: "Accountant", color: "#FFA07A" },
    ],
    correctAnswer: "Programmer",
  },
  {
    id: 3,
    question: "I am from ___",
    answers: [
      { answer: "India", color: "#FFD700" },
      { answer: "Bangladesh", color: "#00CED1" },
      { answer: "Canada", color: "#FF8A14" },
      { answer: "United States", color: "#FF14EF" },
      { answer: "Nepal", color: "#FFA07A" },
    ],
    correctAnswer: "Bangladesh",
  },
  {
    id: 4,
    question: "I am ___ years old",
    answers: [
      { answer: "26", color: "#FFD700" },
      { answer: "30", color: "#00CED1" },
      { answer: "25", color: "#FF8A14" },
      { answer: "23", color: "#FF14EF" },
      { answer: "28", color: "#FFA07A" },
    ],
    correctAnswer: "23",
  },
  {
    id: 5,
    question: "I love to play ___",
    answers: [
      { answer: "Cricket", color: "#FFD700" },
      { answer: "Football", color: "#00CED1" },
      { answer: "Hockey", color: "#FF8A14" },
      { answer: "Musical instrument", color: "#FF14EF" },
      { answer: "Tennis", color: "#FFA07A" },
    ],
    correctAnswer: "Musical instrument",
  },
];
