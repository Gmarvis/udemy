"use client";

import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Dummy data can get from
const testimonials = [
  {
    id: 1,
    name: "Will A",
    quote:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    link: "https://example.com",
  },
  {
    id: 2,
    name: "Ron F",
    quote:
      "This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :)",
    link: "https://example.com",
  },
  {
    id: 3,
    name: "Phillip W",
    quote:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.",
    link: "https://example.com",
  },
  {
    id: 4,
    name: "Surya M",
    quote:
      "I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.",
    link: "https://example.com",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-3xl font-extrabold text-gray-800">
            How learners like you are achieving their goals
          </h2>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow p-6 h-72">
                  <FaQuoteLeft className="text-2xl text-gray-500 mr-2" />
                  <p className="text-lg text-gray-800">{testimonial.quote}</p>
                  <p className="mt-4 text-gray-600">{testimonial.name}</p>
                  {/* <div className="flex flex-column bg-red-500 border"> */}
                  <a href={testimonial.link} className="text-blue-500 flex flex-row gap-2" >
                    {" "}
                  <FaPlayCircle className="text-3xl" />
                    Read more
                  </a>
                  {/* </div> */}
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
