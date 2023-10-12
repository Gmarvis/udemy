import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Hero from '../organisms/heroSection';
import CategoryList from '../organisms/categoryList';
import CategoryCard from '../molecules/categoryCard'

interface Category {
  id: number;
  title: string;
  image: string;
  departments: string[];
}

interface Course {
  id: number;
  title: string;
  image: string;
  author: string;
  rating: number;
  price: number;
}

interface Content {
  department: string;
  header: string;
  paragraph: string;
  courses: Course[];
}

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [content, setContent] = useState<Content[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchContent = async () => {
      try {
        const response = await axios.get('/content');
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchCategories();
    fetchContent();
  }, []);

  const handleDepartmentClick = (department: string) => {
    setSelectedDepartment(department);
  };

  return (
    <div>
      {/* <Hero /> */}
      <CategoryList categories={categories} />
      {selectedDepartment && (
        <div className="mt-8">
          {content.map((item) => {
            if (item.department === selectedDepartment) {
              return (
                <div key={item.department}>
                  <div className="text-2xl font-bold mb-4">
                    {item.header}
                  </div>
                  <p>{item.paragraph}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {item.courses.map((course) => (
                      <CategoryCard
                        key={course.id}
                        title={course.title}
                        image={course.image}
                        author={course.author}
                        rating={course.rating}
                        price={course.price}
                      />
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;