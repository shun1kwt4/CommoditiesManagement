import React, {useState} from 'react';
import {Table, SearchBox, Sidebar} from './components/components';

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <SearchBox/>
      <Table page={page}/>
    </div>
  );
}