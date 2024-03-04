 export default function Table() {
    const page = 0;
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push({id: i, name: 'PC', category: 'PC', state: true, remark: 'PC',});
    }
    const itemTable = []
    for (let i = page*10; i < page*10+10; i++) {
        itemTable.push(    
            <tr>
                        <td>{items[i].name}</td>
                        <td>{items[i].categoty}</td>
                        <td>{items[i].State}</td>
                        <td>{items[i].remark}</td>               
            </tr>  )
    }

    return (
        <>
            <table border="1">
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