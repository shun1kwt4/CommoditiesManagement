import React, { useContext } from "react";

// インスタンスの作成
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

/**
 * ContextProviderの設定（userContextProviderの簡略化表記を定義）
 * @returns AuthContext
 */
export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const loginProcess = () => {
    setIsLogin(true);
  };

  const value = {
    isLogin,
    isAdmin,
    loginProcess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
