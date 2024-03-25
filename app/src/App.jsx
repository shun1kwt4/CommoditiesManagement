import React, {useState, useEffect} from 'react';
import {Table} from './components/components';

export default function App() {
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/commodities/select")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setMessage(data.message);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });
  }, []);

  console.log(message);

  return (
    <p>{message || 'メッセージがありません'}</p>
  );
}
