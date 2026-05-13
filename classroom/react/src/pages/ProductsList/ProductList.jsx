import React from "react";
import Details from "../Details/Details";
import './ProductList.css'

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      category: "Smartphones",
      price: 1299,
      inStock: true,
      rating: 4.9,
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      category: "Smartphones",
      price: 1099,
      inStock: true,
      rating: 4.8,
    },
    {
      id: 3,
      title: "MacBook Air M3",
      category: "Laptops",
      price: 1599,
      inStock: false,
      rating: 5.0,
    },
    {
      id: 4,
      title: "Sony WH-1000XM5",
      category: "Headphones",
      price: 399,
      inStock: true,
      rating: 4.7,
    },
    {
      id: 5,
      title: "Logitech MX Master 3S",
      category: "Accessories",
      price: 129,
      inStock: true,
      rating: 4.9,
    },
  ];

  return (
    <div>
        {
            products.map(p => <Details product={p}/>)
        }
    </div>
  );
};

export default ProductList;
