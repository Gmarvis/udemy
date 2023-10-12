import React from 'react';
import Image from 'next/image';

type Props = {
  
  imageurl: string;
  name: string;
  author: string;
  price: string;
  description: string;
  classification?: string
};

const CourseCard = ({
  name,
  classification,
  imageurl,
  author,
  price,
  description,
}: Props): React.JSX.Element => {
  return (
    <div className="card">
      <Image className="product--image" src={imageurl} alt="product image" />
      <h2>{name}</h2>
      <p>{author}</p>
      <p className="price">
        <span>₦</span>
        {price}
      </p>
      <p className="price">rate and number of students</p>
      <p>{description}</p>

      <p>{classification}</p>
    </div>
  );
};

export default CourseCard
