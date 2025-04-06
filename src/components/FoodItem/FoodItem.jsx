import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';

const FoodItem = ({ name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        
        { 
          !itemCount 
          ? <img 
              className="add" 
              onClick={() => setItemCount(prev => prev + 1)} 
              src={assets.add_icon_white} 
              alt="Add to cart" 
            />
          : <div className="food-item-counter">
          <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
            <p>{itemCount}</p>
            <img  onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
            </div>
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
