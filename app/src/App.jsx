import { GlobalMenu, Body } from "./components/components";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function App() {
  const { isLogin, isAdmin } = useAuth();

  return (
    <div className="app">
      {isLogin && <GlobalMenu />}
      <Routes>
        <Route path="/" element={<Body />} />
        {isAdmin ? (
          <Route path="/admin" element={<Body selectedComponent="admin" />} />
        ) : (
          <Route path="/admin" element={<Body />} />
        )}
        <Route path="/mylist" element={<Body selectedComponent="mylist" />} />
        <Route path="/setting" element={<Body selectedComponent="setting" />} />
        <Route path="/login" element={<Body selectedComponent="login" />} />
      </Routes>
    </div>
  );
}
