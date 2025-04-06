import React, { useState } from 'react'; // Don't forget to import useState
import Header from '../../components/Header/header';
import './Home.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState("All"); // Initializing state with "All"
  
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} /> 
      <FoodDisplay category={category}/>
    </div>
  );
}

export default Home;
