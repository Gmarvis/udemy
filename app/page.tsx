import React from 'react';
import Image from 'next/image';
import CategoryCard from './components/organisms/CategoryCard'

const categories = [
  {
    id: 1,
    title: 'Web Development',
    image: 'web-development.jpg',
  },
  {
    id: 2,
    title: 'Data Science',
    image: 'data-science.jpg',
  },
  // Add more categories as needed
];


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Udemy Clone</h1>
      <CategoryCard categories={categories} />
    </main>
  );
}