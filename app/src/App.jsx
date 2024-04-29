import { Gmenu, Body } from "./components/components";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function App() {
  const { isLogin, isAdmin } = useAuth();

  return (
    <div className="app">
      {isLogin && <Gmenu />}
      <Routes>
        <Route path="/" element={<Body />} />
        {isAdmin ?? (
          <Route path="/admin" element={<Body selectedComponent="Admin" />} />
        )}
        <Route path="/mylist" element={<Body selectedComponent="Mylist" />} />
        <Route path="/login" element={<Body selectedComponent="login" />} />
      </Routes>
    </div>
  );
}
