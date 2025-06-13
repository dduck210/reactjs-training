import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // .then((products) => setProduct(products));
      .then((data) => {
        console.log("Data api: ", data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {/* {products.map((product) => {
        <li key={product.id}></li>;
      })} */}
    </div>
  );
}

export default ProductList;
