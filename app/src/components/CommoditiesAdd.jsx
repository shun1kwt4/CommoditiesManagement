import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [categories_id, setCategories_id] = useState('');
  const [categories_name, setCategories_name] = useState('');


  const handleSubmit = () => {
    // ここでフォームデータを処理するための追加のコードを記述します
    const formData = {
        name, categories_id, categories_name 
    };
    console.log(formData);
    // ここにフォームデータを送信するための追加の処理を追加します
  };

  return (
    <form>
      <label htmlFor="name">Input 1:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>

      <label htmlFor="categories_id">Input 2:</label>
      <input
        type="text"
        id="categories_id"
        value={categories_id}
        onChange={(e) => setCategories_id(e.target.value)}
      /><br/><br/>

      <label htmlFor="categories_name">Input 2:</label>
      <input
        type="text"
        id="categories_name"
        value={categories_name}
        onChange={(e) => setCategories_name(e.target.value)}
      /><br/><br/>

      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default MyForm;