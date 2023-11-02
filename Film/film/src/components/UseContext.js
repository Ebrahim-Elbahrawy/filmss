import React, { createContext, useState } from "react";

//1-create context
const ColorContext = createContext();
//-update data in context
//2-create provider
const UseContextProvider = ({ children }) => {
  const [data, setData] = useState("light");

  const changeData = (theme) => {
    setData(theme);
  };

  return (
    <ColorContext.Provider value={{ data, changeData }}>
      {children}
    </ColorContext.Provider>
  );
};
//3 export context to use , provider to wrap all component
export { UseContextProvider, ColorContext };
