'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface TopCategoriesProps {
  categories: Category[];
}

const TopCategories: React.FC<TopCategoriesProps> = ({ categories }) => {
  return (
    <div className="justify-center py-8 mr-40 ml-40">
      <h2 className="font-bold text-2xl pb-8 ml-28">Top Categories</h2>
      <div className="flex max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center -m-4">
          {categories.map((category) => (
            <div key={category.id} className="m-3">
              <Link href={category.link}>
                  <div className="overflow-hidden">
                    <div className="relative h-72 w-80 bg-gray-900 cursor-pointer">
                    <Image
                        src={category.image}
                        alt={category.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold ">{category.title}</h3>
                    </div>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  { id: 1, title: 'Design', image: '/cat1.jpg', link: '/design' },
  { id: 2, title: 'Development', image: '/cat2.jpg', link: '/development' },
  { id: 3, title: 'Marketing', image: '/cat5.jpg', link: '/marketing' },
  { id: 4, title: 'IT and Software', image: '/cat3.jpg', link: '/itAndSoftware' },
  { id: 5, title: 'Personal Development', image: '/cat4.jpg', link: '/personalDevelopment' },
  { id: 6, title: 'Business', image: '/cat6.jpg', link: '/business' },
  { id: 7, title: 'Photography', image: '/cat7.jpg', link: '/photography' },
  { id: 8, title: 'Music', image: '/cat8.jpg', link: '/music' },
];

// Usage
const MyComponent: React.FC = () => {
  return <TopCategories categories={categories} />;
};

export default MyComponent;