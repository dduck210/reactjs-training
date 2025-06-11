export default function ProductCard({ image, title, price }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{price} VNĐ</h3>
    </div>
  );
}

// export default ProductCard;
