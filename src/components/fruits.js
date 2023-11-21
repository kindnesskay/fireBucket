import { collection, getDocs } from "firebase/firestore";
import Card from "./card";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

function Fruits() {
  const [fruitsArray, setFruitsArray] = useState([]);
  const docRef = collection(db, "bucket");

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getDocs(docRef);
        const filterd_data = data.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            image: { src: "/orange.jpg", name: doc.data().name },
          };
        });

        setFruitsArray(filterd_data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchdata();
  }, []);
  return (
    <div className="product_grid">
      {!fruitsArray && <p>Nothing to display </p>}

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
