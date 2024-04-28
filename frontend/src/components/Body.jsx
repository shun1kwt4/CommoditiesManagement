import { useState } from "react";
import { Table, SearchBox, Sidebar, ChangePassword, Login } from "./components";

export default function Body() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <SearchBox />
      {/* <Sidebar /> */}
      <Table page={page} />
      <ChangePassword page={page} />
      <Login page={page} />
    </div>
  );
}
