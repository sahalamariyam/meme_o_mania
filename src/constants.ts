import { Product, Meme, Recipe, QuizQuestion } from './types';

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Classic Bunny Basket', price: 24.99, image: 'https://picsum.photos/seed/basket1/400/400', category: 'Bundle' },
  { id: '2', name: 'Gourmet Chocolate Set', price: 34.99, image: 'https://picsum.photos/seed/choco/400/400', category: 'Bundle' },
  { id: '3', name: 'DIY Egg Decorating Kit', price: 15.99, image: 'https://picsum.photos/seed/diy/400/400', category: 'Kit' },
  { id: '4', name: 'Plush Bunny Friend', price: 19.99, image: 'https://picsum.photos/seed/bunny/400/400', category: 'Toy' },
];

export const MEMES: Meme[] = [
  { id: 'g1', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKVUn7iM8FMEU24/giphy.gif', type: 'gif', caption: 'When you find the golden egg' },
  { id: 'g2', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lTfuxV59z5z5zW/giphy.gif', type: 'gif', caption: 'Easter morning energy' },
  { id: 'g3', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxXfQC9Z2M0/giphy.gif', type: 'gif', caption: 'Me after 10 chocolate eggs' },
  { id: 'g4', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxXfQC9Z2M0/giphy.gif', type: 'gif', caption: 'The bunny is coming' },
  { id: 'g5', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxXfQC9Z2M0/giphy.gif', type: 'gif', caption: 'Egg hunt champion' },
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `m${i}`,
    url: `https://picsum.photos/seed/eastermeme${i}/400/400`,
    type: 'image' as const,
    caption: `Meme Caption ${i + 1}`
  }))
];

export const RECIPES: Recipe[] = [
  { id: 'r1', title: 'Hot Cross Buns', description: 'Traditional spiced sweet buns.', image: 'https://picsum.photos/seed/recipe1/400/300' },
  { id: 'r2', title: 'Carrot Cake', description: 'Moist and delicious with cream cheese frosting.', image: 'https://picsum.photos/seed/recipe2/400/300' },
  { id: 'r3', title: 'Deviled Eggs', description: 'The perfect Easter appetizer.', image: 'https://picsum.photos/seed/recipe3/400/300' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which flower is a symbol of Easter?',
    options: ['Rose', 'Lily', 'Tulip', 'Daisy'],
    correctAnswer: 1
  },
  {
    id: 'q2',
    question: 'What is the traditional Easter meat?',
    options: ['Beef', 'Chicken', 'Lamb', 'Pork'],
    correctAnswer: 2
  }
];
