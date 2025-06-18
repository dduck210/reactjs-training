import ProductCard from "./ProductCard";

// Test hiển thị ra dữ liệu ở dạng mảng hoặc object
function ShowArrayData() {
  const products = [
    { id: 1, name: "Áo phông", price: 300000 },
    { id: 2, name: "Quần dài", price: 200000 },
  ];
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ShowArrayData;
