import React, { createContext, useContext, useReducer } from "react";
//Prepare data layer
export const StateContex = createContext();
//wrap app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContex.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContex.Provider>
);
//pull info
export const useStateValue = () => useContext(StateContex);
