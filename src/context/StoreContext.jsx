// src/context/StoreContext.js
import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";  // Importing food_list

// Create the context
const StoreContext = createContext(null);

// Create the provider component
export const StoreContextProvider = (props) => {
 const [cartItem,setCartItems]=useState({});
 const addToCart=(itemId) =>{
  if(!cartItem[itemId]){
    setCartItems((prev)=>({...prev,[itemId]:1}))
   
  }
  else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]}+1))/* if prod is already in the cart it will be increased by 1*/
  }
 }
 const removeFromcart =(itemId) =>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }
  const contextValue = {
    food_list,
    cartItem,
    setCartItems,
    addToCart,
    removeFromcart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children} {/* Children components will have access to the context */}
    </StoreContext.Provider>
  );
};

// Export the context to be consumed in other components
export { StoreContext };
