import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "react-simple-star-rating";


const CouseContent = () => {



  return (
    <div className="flex flex-col gap-10 bg-white py-5 px-6 w-110 h-auto ring text-3xl">
      <h2>Title of content</h2>
      <span>Bestseller</span>
      <p>descritption of the course</p>
      <ul>
        <li className="checkmark-list-style">what you will learn 1</li>
        <li className="checkmark-list-style">what you will learn 2</li>
        <li className="checkmark-list-style">what you will learn 3</li>
      </ul>
      <div className="w-full pl-3 py-5 text-2xl text-white">
        <button className="bg-purple hover:bg-violet  w-72 px-10 py-5 text-2xl mr-10">
          Add to Cart
        </button>

        <span className="border border-metal py-5 px-4 rounded-full w-12 h-20  hover:bg-gray">
          <Rating
            // fillIcon={<MdFavorite size={30} />}
            emptyIcon={<MdFavoriteBorder size={40} />}
            iconsCount={1}
            SVGclassName="svgIcon inline-block hover:bg-gray "
            fillColor="#000"
            emptyColor="black"
            disableFillHover={true}
            allowHover={false}
            showTooltip={false}
        
          />
        </span>
      </div>
    </div>
  );
};

export default CouseContent;
