import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProdcuts] = useState([]);

    useEffect(() => {
      axios.get('https://dummyjson.com/products/?limit=12').then(res => {
        setProdcuts(res.data.products);
      })
        .catch((error) => console.log(error));
    }, []);
    
  return (
    <ItemListContainer products={products} />
  )
}

export default Home