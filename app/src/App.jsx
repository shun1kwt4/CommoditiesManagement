import React, {useState} from 'react';
import './App.css';
import {Table} from './component/index';

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Table page={page}/>
    </div>
  );
}