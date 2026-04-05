export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Meme {
  id: string;
  url: string;
  type: 'gif' | 'image';
  caption: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface EggDesign {
  color: string;
  pattern: string;
}
