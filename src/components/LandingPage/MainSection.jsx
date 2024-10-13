import React from "react";
import { Button, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <div className="text-white flex flex-col justify-center items-center text-center my-24">
      <Typography variant="h2" className="mb-4 font-bold text-purple-500">
        Welcome to Our Store!
      </Typography>
      <Typography variant="h6" className="mb-6">
        Discover amazing products from top brands.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#7e22ce",
          "&:hover": {
            backgroundColor: "#6b21a8",
          },
        }}
        href="/products"
      >
        Shop Now
      </Button>
    </div>
  );
}
