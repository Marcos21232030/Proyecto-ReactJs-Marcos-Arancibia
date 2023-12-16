import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";



 const Home = () => {
  const { products} = useAllProducts("products");

  return (
    <div>

      <ItemListContainer products={products} />

    </div>
  );
};
export default Home;