// src/context/StoreContext.js
import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";  // Importing food_list

// Create the context
const StoreContext = createContext(null);

// Create the provider component
export const StoreContextProvider = (props) => {
  // Setting up the value for the context
  const contextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children} {/* Children components will have access to the context */}
    </StoreContext.Provider>
  );
};

// Export the context to be consumed in other components
export { StoreContext };
