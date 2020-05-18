import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CharacterInventory() {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/item');
      setData(result.data.items_owned);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.items_owned.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
