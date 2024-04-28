import { useMemo } from "react";
import { PagingTable } from "@yamada-ui/table";

export default function Tables() {
  const columns = useMemo(
    () => [
      {
        header: "名前",
        accessorKey: "commodity_name",
        css: { color: "primary" },
      },
      { header: "種類", accessorKey: "genre", css: { color: "primary" } },
      { header: "状態", accessorKey: "state", css: { color: "primary" } },
      { header: "備考", accessorKey: "other", css: { color: "primary" } },
    ],
    []
  );

  const datas = useMemo(
    () => [
      { commodity_name: "aaa", genre: "1", state: 0, other: "" },
      { commodity_name: "bbb", genre: "2", state: 0, other: "test" },
      { commodity_name: "ccc", genre: "3", state: 1, other: "" },
      { commodity_name: "ddd", genre: "4", state: 0, other: "daredadareda" },
    ],
    []
  );
  return (
    <PagingTable
      columns={columns}
      data={datas}
      enableRowSelection={false}
      withColumnBorders
      withBorder
      highlightOnHover
    ></PagingTable>
  );
}
