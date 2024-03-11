import { useState } from "react";

export default function SearchBox() {
  const [searchqry, setSearchQry] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter the name"
        value={searchqry}
        onChange={(event) => setSearchQry(event.target.value)}
      ></input>
      <h1>{searchqry}</h1>
    </div>
  );
}