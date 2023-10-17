import React, { useState, ReactNode } from "react";
import { Rating } from "react-simple-star-rating";

type Props = {
  fillIcon?: ReactNode;
  fillColor?: string;
  fillColorArray?: string[];
  onClick?: () => void;
  initialValue?: number;
  size?: number;
  emptyColor?: string;
  disableFillHover?: boolean;
  emptyIcon?: React.JSX.Element;
  allowHover?: boolean;
};

function Rate({...props}: Props) {
  const [ratingVal, setRatingVal] = useState(0);

  const handleRating = (rate: number) => {
    setRatingVal(rate);
  };

  const handleReset = () => {
    // Set the initial value
    setRatingVal(0);
  };
  return (
    <div className="flex items-center gap-4 justify-center">
      <Rating
        onClick={handleRating}
        initialValue={ratingVal}
        size={20}
        fillColorArray={["#f17a45", "#f19745", "#f1a545", "#f1b345", "#f1d045"]}
        emptyColor="gray"
        className="py-0"
        disableFillHover={true}
      />
      <p className="text-xl">{ratingVal}</p>
    </div>
  );
}

export default Rate;
