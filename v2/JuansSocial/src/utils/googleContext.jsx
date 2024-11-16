import React, { createContext, useState, useEffect } from 'react';

const PrefilledDataContext = createContext({ prefilledEmail: null});

function PrefilledDataProvider({ children, initalEmail }) {
    const [email, setEmail] = useState(initalEmail || '');

    console.log(email)

    const handleSetPrefilledEmail = (email) => {
        setEmail(email)
    }

return(
    <PrefilledDataContext.Provider value={{ email, handleSetPrefilledEmail }}>
    {children}
  </PrefilledDataContext.Provider>
);


}

export {PrefilledDataContext, PrefilledDataProvider}