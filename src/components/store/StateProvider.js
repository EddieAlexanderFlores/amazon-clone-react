import React, { createContext, useContext, useReducer } from "react";

// setup data layer
// we need to track the basket and user

export const StateContext = createContext(); // DATA LAYER

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

// Custom Hook Function
export const useStateValues = () => useContext(StateContext);
