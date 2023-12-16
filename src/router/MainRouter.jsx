import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "../pages/Category";
import { NavBarComponent } from "../components/NavBarComponent/NavBarComponent";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import Home from "../pages/Home";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};