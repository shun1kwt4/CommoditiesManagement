import { VStack, Button, FormControl, Input } from "@yamada-ui/react";

export default function Login() {
  const onSubmit = () => {
    return console.log("clicked");
  };

  return (
    <VStack as="form" onSubmit={onSubmit}>
      <FormControl label="Username">
        <Input type="text" placeholder="username"></Input>
      </FormControl>
      <FormControl label="Password">
        <Input type={"password"} placeholder="password" maxLength={10}></Input>
      </FormControl>
      <Button type="submit" alignSelf="flex-end">
        Sign In
      </Button>
    </VStack>
  );
}
