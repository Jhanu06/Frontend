import { useState, useEffect } from 'react';

function UseProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const productList = await res.json();
        setProducts(productList);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return { products, loading };
}

export default UseProducts;
