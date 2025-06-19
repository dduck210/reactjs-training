import { useEffect, useState } from "react";

function ProductDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");

        const data = await res.json();
        setProducts(data.products);
        // console.log(data.products[0]);
      } catch (error) {
        console.error("Lỗi fetch:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Danh sách sản phẩm (async await)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Description: </span>{" "}
              {product.description}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Category:</span>
              {product.category}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Price:</span> {product.price}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Discount Percentage:</span>{" "}
              {product.discountPercentage}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Discounted Total:</span>{" "}
              {product.discountedTotal}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Rating:</span> {product.rating}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Stock:</span> {product.stock}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Tags:</span> {product.tags?.beauty},{" "}
              {product.tags?.mascara}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Brand:</span> {product.brand}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Thumbnail:</span>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-auto"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
