import Card from "./card";
import { useState } from "react";

let test = [
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 1,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 2,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 3,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 4,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 5,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 6,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 7,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 8,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 9,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 10,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 11,
  },
  {
    image: { src: "/orange.jpg", name: "orange" },
    name: "orange",
    price: 1200,
    id: 12,
  },
];
function Fruits() {
  const [fruitsArray, setFruitsArray] = useState(test);
  return (
    <div className="product_grid">
      {fruitsArray.map((fruit) => (
        <Card
          key={fruit.id}
          image={fruit.image}
          name={fruit.name}
          price={fruit.price}
        />
      ))}
    </div>
  );
}

export default Fruits;
