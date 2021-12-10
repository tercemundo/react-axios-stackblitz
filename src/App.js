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
    <table > <tr><th>TituLo</th> </tr>

    <div>
      {products.map((product) => (
        <>
        <tr><td>{product.title}</td>
        <td>{product.body}</td></tr>
        </>
        
      ))}
    </div>
    </table>
  );
}

export default App;