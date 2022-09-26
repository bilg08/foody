import React, { useState, useContext, createContext } from 'react'

const AgainGetDataContext = createContext()

export const AgainGetDataContextProvider = ({ children }) => {
  const [againGetDocs, setAgainGetDocs] = useState(false);
  
    return (
      <AgainGetDataContext.Provider value={{ againGetDocs, setAgainGetDocs }}>
        {children}
      </AgainGetDataContext.Provider>
    );
}

export const useAgainGetDocs=()=>useContext(AgainGetDataContext)

