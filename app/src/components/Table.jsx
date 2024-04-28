export default function Table(props) {
  const page = 0;
  const items = [];

  // 仮DB
  for (let i = 0; i < 200; i++) {
    if (i % 3 == 0) {
      items.push({
        id: i,
        name: "PC",
        category: "PC",
        state: true,
        remark: "PC",
      });
    } else if (i % 3 == 1) {
      items.push({
        id: i,
        name: "カメラ",
        category: "カメラ",
        state: false,
        remark: "カメラ",
      });
    } else {
      items.push({
        id: i,
        name: "スピーカ",
        category: "スマートスピーカ",
        state: true,
        remark: "スマートスピーカ",
      });
    }
  }

  //ページに応じてreturnするテーブルを作成
  const itemTable = [];
  for (let i = props.page * 10; i < props.page * 10 + 10; i++) {
    itemTable.push(
      <tr>
        <td>{items[i].name}</td>
        <td>{items[i].category}</td>
        <td>{items[i].state ? "貸出可" : "貸出中"}</td>
        <td>{items[i].remark}</td>
      </tr>
    );
  }

  return (
    <>
      <table border="2">
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>State</th>
          <th>Remarks</th>
        </tr>
        {itemTable}
      </table>
    </>
  );
}
