import React, { useEffect, useState } from 'react';
import esriRequest from '@arcgis/core/request';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const searchEndpoint = 'https://www.arcgis.com/sharing/rest/search';
      const searchParams = {
        q: 'type:"Web Map"',
        f: 'json'
      };

      try {
        const response = await esriRequest(searchEndpoint, { params: searchParams });
        setItems(response.data.results);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>List of Web Maps</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} (ID: {item.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;