import React from "react";

import './Categories-component.scss';
import { CategoryData } from "../../../utils/Expenses";

const Categories = () => {
  return (
    <div className="categories">
      <h1 className="categories__heading">
        Categories <span className="categories__heading__span">200+ Categories</span>
      </h1>

      <div className="categories--content--container">
        {CategoryData.map((category) => {
          const { name, img, title, rating, product } = category;

          return (
            <React.Fragment key={name}>
              <article className="categories--content">
                <img src={img} alt={`${title} image`} />

                <div className="categories--content--desc">
                  <p>{title}</p>
                  <h3>{name}</h3>
                  <div className="categories--content--desc-span">
                    <span className="categories--content--desc-span-rating">
                      {rating}
                    </span>
                    <span className="categories--content--desc-span-product">
                      {product} Products
                    </span>
                  </div>
                </div>
              </article>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
