import { Login, Tables } from "../YamadaComponents/Components";
import { useAuth } from "../AuthContext";

export default function Body({ selectedComponent }) {
  const { isLogin } = useAuth();

  const switcher = () => {
    switch (selectedComponent) {
      case "Mylist":
        return <div>My List</div>;
      case "admin":
        return <div>admin</div>;
      case "setting":
        return <div>setting</div>;
      default:
        return <Tables />;
    }
  };

  return <>{isLogin ? <Login /> : switcher}</>;
}
