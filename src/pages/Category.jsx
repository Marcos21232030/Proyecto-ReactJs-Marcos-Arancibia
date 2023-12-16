import React from "react";
import { useAllProductsByFilter } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllProductsByFilter("products", categoryId, "category");


  return <ItemListContainer products={products} />;
};

export default Category;