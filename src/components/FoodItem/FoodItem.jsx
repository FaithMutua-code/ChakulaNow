import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets.js';

const FoodItem = ({ id, name, price, description, image }) => {
  const [cartItem, addToCart, removeFromCart] = useContext(StoreContext);

  const handleAdd = () => addToCart(id);
  const handleRemove = () => removeFromCart(id);

  const itemInCart = cartItem[id];

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {
          !itemInCart 
          ? (
            <img 
              className="add" 
              onClick={handleAdd} 
              src={assets.add_icon_white} 
              alt="Add item to cart" 
            />
          ) 
          : (
            <div className="food-item-counter">
              <img 
                onClick={handleRemove} 
                src={assets.remove_icon_red} 
                alt="Remove item from cart" 
              />
              <p>{itemInCart}</p>
              <img 
                onClick={handleAdd} 
                src={assets.add_icon_white} 
                alt="Add item to cart" 
              />
            </div>
          )
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Sh {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
