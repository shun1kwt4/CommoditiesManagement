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
  const [isLogin, setIsLogin] = React.useState(true);
  const [isAdmin, setIsAdmin] = React.useState(true);

  const value = {
    isLogin,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
