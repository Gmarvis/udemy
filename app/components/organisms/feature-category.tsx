import React from "react";
import Button from "../atoms/Button";

type Props = {};

const FeatureCategory = (props: Props) => {
  return (
    <div>
      <div>
        <h1>Featured topics by category</h1>
        <div>
          <h3>Development</h3>
          <div>
            <p>Python</p>
            <p>36,354,994 learners</p>
          </div>
          <div>
            <p>Web Development</p>
            <p>11,415,615 learners</p>
          </div>
          <div>
            <p>Machine Learning</p>
            <p>7,070,015 learners</p>
          </div>
          <Button
            label="Explore more topics"
            className=""
          />
        </div>
        <div>
          <h3>Business</h3>
          <div>
            <p>Financial Analysis</p>
            <p>1,195,282  learners</p>
          </div>
          <div>
            <p>SQL</p>
            <p>5,977,561 learners</p>
          </div>
          <div>
            <p className="">PMP</p>
            <p>1,733,398 learners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;
