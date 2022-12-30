import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    isLogin: false,
    setIsLogin: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const contextValue = {
        isLogin,
        setIsLogin,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;
