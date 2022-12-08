import React, {useContext, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const setScrolling = (el) => {
        if(el) {document.body.style.overflow = 'hidden'} 
        else {document.body.style.overflow = 'scroll'}  
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            setIsSidebarOpen,
            setScrolling
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext};