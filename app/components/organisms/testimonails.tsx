'use client'

import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaPlayCircle } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Will A',
    quote: 'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
    link: '[NEW] Ultimate AWS Certified Cloud Practitioner 2022',
  },
  {
    id: 2,
    name: 'Ron F',
    quote: 'This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys I definitely recommend this course for those who want to become product manager.',
    link: 'Become a Product Manager | Learn the Skills & Get the Job',
  },
  
   {
    id: 3,
    name: 'Phillip W',
    quote: 'One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.',
    link: 'Leadership: Practical Leadership Skills To Take',
  },
  {
    id: 4,
    name: 'Surya M',
    quote: 'I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.',
    link: 'Tableau 2022 A-Z: Hands-On Tableau Training for Data Science',
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full mr-64 ml-64">
        <div className="mx-auto text-left">
          <h2 className="text-2xl font-bold">How learners like you are achieving their goals</h2>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="max-w-3xl mx-auto">
                <div className="bg-white border border-gray-300 p-6 mr-2">
                  <FaQuoteLeft className="text-3xl mr-2 pb-4" />
                  <p className="text-base">{testimonial.quote}</p>

                  <div className="gap-4 flex items-center pt-4 pb-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white font-bold text-l" style={{ backgroundColor: 'black' }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <p className="mt-4 text-gray-600 pb-5">{testimonial.name}</p>
                  </div>

                  <a href={testimonial.link} className="text-blue-700 flex items-center border-t border-gray-300 pt-4 font-bold text-sm">
                    <FaPlayCircle className="text-3xl mr-2" />
                    {testimonial.link}
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;