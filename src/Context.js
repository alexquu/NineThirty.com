import React, {useContext, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            setIsSidebarOpen
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext};