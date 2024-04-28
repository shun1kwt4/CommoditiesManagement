import { UIProvider } from "@yamada-ui/react";
import { Header, Body } from "./components/components";
import { Table } from "./components/components";

export default function App() {
  return (
    <UIProvider>
      <Header />
      <Body />
      <Table></Table>
    </UIProvider>
  );
}
