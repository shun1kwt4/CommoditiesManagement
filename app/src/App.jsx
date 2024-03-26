import React, { useState, useEffect } from 'react';
import { Table } from './components/components';

export default function App() {
  const [page, setPage] = useState(0);
  const [commodities, setCommodities] = useState([]);
  const [loading, setLoading] = useState(true); // 追加: データ読み込み中を示す状態

  useEffect(() => {
    let isMounted = true; // 追加: コンポーネントがマウントされているかどうかを示すフラグ

    const fetchCommodities = async () => {
      try {
        const response = await fetch('http://localhost:3001/commodities/select');
        const data = await response.json();
        
        if (isMounted) { // 追加: コンポーネントがまだマウントされている場合にのみ状態を更新
          setCommodities(data);
          setLoading(false); // 追加: データの読み込みが完了したことを示す
        }
      } catch (error) {
        console.error('Error fetching commodities:', error);
      }
    };

    fetchCommodities();

    return () => {
      isMounted = false; // 追加: コンポーネントがアンマウントされたらフラグを更新
    };
  }, []);

  console.log(commodities);

  if (loading) {
    return <p>Loading...</p>; // 追加: データが読み込まれるまで表示されるローディング状態
  }

  return (
    <div>
      {commodities[0].names}
    </div>
  );
}