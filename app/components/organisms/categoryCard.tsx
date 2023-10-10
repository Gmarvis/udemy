import React from 'react';
import Slider from 'react-slick';

interface Category {
  id: number;
  title: string;
  image: string;
}

interface CategoryCardsProps {
  categories: Category[];
}

const CategoryCards: React.FC<CategoryCardsProps> = ({ categories }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="object-cover h-48 w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCards;