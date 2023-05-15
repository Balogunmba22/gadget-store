import React from "react";
import { Grid } from "@mui/material";
import { Product } from "./Product/Product";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running Shoes",
    price: "35",
    image: "https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg",
  },
  {
    id: 2,
    name: "macbook",
    description: "Apple Macbook",
    price: "125",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
  },
];

export const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
