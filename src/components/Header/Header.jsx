import React from 'react'
import './Header.css'
import { assets } from '../../assets/frontend_assets/assets'
const Header = () => {
  return (
    <div className="header">
      <img src={assets.header_img.png}alt="" />
    <div className="header-contents">
    <h2>Order Your Favourite Food Here</h2>
<p>Craving something delicious? Browse through our wide variety of mouthwatering dishes, from comfort food to exotic cuisines. Whether you're in the mood for a quick snack or a full meal, we have something to satisfy every craving. Place your order now and enjoy fast, fresh delivery right to your door!</p>
    <button>View Menu</button>
    </div>
  </div>
)
}

export default Header