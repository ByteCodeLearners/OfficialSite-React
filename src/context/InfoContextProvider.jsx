import React, { createContext, useContext, useState } from "react";

export const InfoContext = createContext(null);
export const useInfoContextProvider = () => {
  return useContext(InfoContext);
};
const InfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState({
    server: "http://bytecodelearners.cuh.ac.in",
  });

  return <InfoContext.Provider value={info}>{children}</InfoContext.Provider>;
};

export default InfoContextProvider;
