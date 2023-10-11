"use client"

import React from 'react';
import Slider from "react-slick";
import Slide from '../molecules/Slide';


const HeroSection =() =>{
  var settings = {
    // dots: true,
    infinite: true,
    speed: 1000,       
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/herosec1.jpg",
      title: "Build ready-for-anything teams",
      mainTitle: "See why leading organizations choose to learn with Udemy Business.",
    },
    {
      id: 1,
      img: "/herosec2.jpg",
      title: "Learning that gets you",
      mainTitle: "Skills for your present (and your future). Get started with us."

    }
  ];


  return (
    <div>
      <div className='container pt-6 lg:pt-0 mx-auto'>
      <Slider {...settings}>
          {slideData.map((item) =>(
            <Slide
             key={item.id}
             img={item.img}
             title={item.title}
             mainTitle={item.mainTitle}
             />
          ))}
         </Slider>
      </div>
    </div>
  );
};

export default HeroSection;