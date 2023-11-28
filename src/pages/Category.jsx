import React, { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Category = () => {

    const [products, setProdcuts] = useState([]);
    const {categoryId} = useParams ();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryId}`).then(res => {
            setProdcuts(res.data.products);
        })
            .catch((error) => console.log(error));
    }, [categoryId]);


    return (
        <ItemListContainer products={products} />
    );
};

export default Category