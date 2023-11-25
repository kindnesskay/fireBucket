import ProductCard from "./productCard";
import { Grid } from "@mui/material";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { db_name, AddToCart } from "../tools/cartActions";
import Loading from "./loading";
function Shop() {
  const handleAddToCart = (data) => {
    let template = {
      ...data,
      quantity: 1,
    };
    AddToCart(db_name, template);
  };
  const [productArray, setProductArray] = useState([]);
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
            image: doc.data().imageSrc,
          };
        });

        setProductArray(filterd_data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchdata();
  }, []);
  return (
    <div className="">
      {!productArray.length && <Loading />}
      <Grid container columnGap={3} rowGap={2} className="product_grid">
        {productArray &&
          productArray.map((item) => (
            <ProductCard
              handleClick={() => handleAddToCart(item)}
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
      </Grid>
    </div>
  );
}

export default Shop;
