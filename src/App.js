import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css"


function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <>
        <p>{product.title}</p>
        <p>{product.body}</p>
        </>
        
      ))}
    </div>
  );
}

export default App;