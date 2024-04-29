import { useNavigate } from "react-router-dom";
import {
  Divider,
  Heading,
  HStack,
  Button,
  Spacer,
  Flex,
} from "@yamada-ui/react";
import { useAuth } from "../AuthContext";

export default function Globalmenu() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  const handleButtonClick = (path) => {
    navigate("/" + path);
  };

  return (
    <div className="header">
      <Flex gap="md">
        <Heading>Commodity Management</Heading>
        <Spacer />
        <HStack>
          {isAdmin && (
            <Button variant="ghost" onClick={() => handleButtonClick("admin")}>
              Admin
            </Button>
          )}
          <Button variant="ghost" onClick={() => handleButtonClick("")}>
            Commodity
          </Button>
          <Button variant="ghost" onClick={() => handleButtonClick("mylist")}>
            MyList
          </Button>
          <Button variant="ghost" onClick={() => handleButtonClick("setting")}>
            Setting
          </Button>
        </HStack>
      </Flex>
      <Divider />
      <br />
    </div>
  );
}
