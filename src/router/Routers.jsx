import { Route, Routes } from "react-router-dom";
import ProductModal from "../components/product/ProductModal";
import Card from "../pages/Card";
import Home from "../pages/Home";
import Store from "../pages/Store";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store/:id" element={<Store />} />
      <Route path="/product/:id" element={<ProductModal />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}
