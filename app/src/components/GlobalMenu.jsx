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
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="header">
      <Flex gap="md">
        <Heading>Commodity Management</Heading>
        <Spacer />
        <HStack>
          {isAdmin && (
            <Button variant="ghost" onClick={() => navigate("/admin")}>
              Admin
            </Button>
          )}
          <Button variant="ghost" onClick={navigate("/")}>
            Commodity
          </Button>
          <Button variant="ghost" onClick={navigate("/mylist")}>
            MyList
          </Button>
          <Button variant="ghost" onClick={navigate("/setting")}>
            Setting
          </Button>
        </HStack>
      </Flex>
      <Divider />
      <br />
    </div>
  );
}
