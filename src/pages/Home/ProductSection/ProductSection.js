import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      });
  }, []);

  return (
    <div>'
      <div className="my-2">
      {products.slice(0,1).map(product=><ProductCard product={product}/>)}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
       {products.slice(1,products.length).map(product=><ProductCard product={product} ></ProductCard>)}
      </div>
    </div>
    </div>
  );
};

export default ProductSection;
