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
      case "Mylist":
        return <MyList></MyList>;
      case "admin":
        return <Admin></Admin>;
      case "setting":
        return <Setting></Setting>;
      default:
        return <Tables />;
    }
  };

  return (
    <Container centerContent>{!isLogin ? <Login /> : switcher()}</Container>
  );
}
