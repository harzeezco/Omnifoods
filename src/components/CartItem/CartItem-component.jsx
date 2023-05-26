import "./CartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { title, id, image, pricePerServing, sourceName, readyInMinutes } =
    cartItem;

  return (
    <div className="display-flex cart--item-content cart--item-container">
      <img src={image} alt="" />
      <div>
        <div className="display-flex">
          <h1>{title.slice(0, 20)}</h1>
          <span className="delete-icon">
            <i className="fa-solid fa-trash"></i>
          </span>
        </div>
        <h2>{sourceName}</h2>
        <div className="cart--item-desc">
          <div className="display-flex">
            <span>Price</span>
            <span>${pricePerServing}</span>
          </div>
          <div className="display-flex">
            <span>Shipping Cost</span>
            <span>$0</span>
          </div>
        </div>
        <div className="display-flex">
          <span>Total</span>
          <span>$9</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
