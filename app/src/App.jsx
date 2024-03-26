import React, {useState} from 'react';
import {Table, SearchBox, Sidebar, ChangePassword, Login} from './components/components';

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <SearchBox/>
      <Sidebar />
      <Table page={page}/>
      <ChangePassword page={page}/>
      <Login page={page}/>
    </div>
  );
}