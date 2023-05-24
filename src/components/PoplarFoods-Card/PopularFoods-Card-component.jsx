import "./PopularFoods-Card.styles.scss";

import fallBackImg from "../../assets/gallery/gallery-1.jpg";

const PopularFoodsCard = ({ popularRecipeItem }) => {
  console.log(popularRecipeItem);

  const { image, dishTypes, title, pricePerServing } = popularRecipeItem;

  const formattedPrice = pricePerServing.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="popular-foods">
      <img src={image || fallBackImg} alt="" />

      <div className="popular-foods-content">
        <span className="popular-foods-label">{dishTypes[0]}</span>
        <h4 className="popular-foods-title">{title.slice(0, 17)}</h4>
        <div className="popular-foods-desc">
          <span className="popular-foods-desc-icon">&#8962;</span>
          <span className="popular-foods-bowls">Backyard Bowls</span>
        </div>
        <div className="popular-foods-price">
          <span>${formattedPrice}</span>
          <span>${(formattedPrice * 2) / 0.5}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularFoodsCard;
