import { useEffect, useState } from "react";

const LoadProducts = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://electronics-zone.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [Products, setProducts];
};
export default LoadProducts;
