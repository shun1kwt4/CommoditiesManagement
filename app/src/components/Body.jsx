import { Container } from "@yamada-ui/react";
import {
  Admin,
  Login,
  MyList,
  Tables,
  Setting,
} from "../YamadaComponents/Components";
import { useAuth } from "../AuthContext";

export default function Body({ selectedComponent }) {
  const { isLogin } = useAuth();

  const switcher = () => {
    switch (selectedComponent) {
      case "admin":
        return <Admin />;
      case "mylist":
        return <MyList />;
      case "setting":
        return <Setting />;
      default:
        return <Tables />;
    }
  };

  return (
    <Container centerContent>{!isLogin ? <Login /> : switcher()}</Container>
  );
}
