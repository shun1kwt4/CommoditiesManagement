import {
  Divider,
  Heading,
  HStack,
  Button,
  Spacer,
  Flex,
} from "@yamada-ui/react";
import { useAuth } from "../AuthContext";

export default function Gmenu() {
  const { isAdmin } = useAuth();

  return (
    <div className="header">
      <Flex gap="md">
        <Heading>Commodity Management</Heading>
        <Spacer />
        <HStack>
          {isAdmin && <Button variant="ghost">Admin</Button>}
          <Button variant="ghost">Commodity</Button>
          <Button variant="ghost">MyList</Button>
          <Button variant="ghost">Setting</Button>
        </HStack>
      </Flex>
      <Divider />
      <br />
    </div>
  );
}
