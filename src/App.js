import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';



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
    <table class="table table-sm mt-3">
      
      <tr><th>TituLo</th>
      </tr>

      <div className="container-fluid p-3">
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