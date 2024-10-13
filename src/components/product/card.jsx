// ProductCard.jsx
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { CartContext } from "../../App";
import Swal from "sweetalert2";

// Placeholder image if the product doesn't have an image
const placeholderImage = "/images/placeholder-image.jpg"; // You can store a default placeholder in the public folder

const CustomCard = styled(Card)(({ theme }) => ({
  width: "300px",
  backgroundColor: "#1e293b", // Dark background
  color: "#fff", // White text
  borderRadius: "15px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7e22ce",
  "&:hover": {
    backgroundColor: "#6b21a8",
  },
  marginTop: "10px",
}));

const ProductCard = ({ product }) => {
  const { items, setItems } = useContext(CartContext);
  const addCart = () => {
    var updatedArray = [];
    var i;
    for (i = 0; i < items.length; i++) {
      updatedArray.push(items[i]);
    }
    product.units = 1;
    updatedArray.push(product);
    setItems(updatedArray);
    Swal.fire({
      title: "Added!",
      text: "Product added to the cart successfully",
      icon: "success",
    });
  };

  return (
    <CustomCard>
      <CardMedia
        component="img"
        height="200"
        image={product.image || placeholderImage} // Use placeholder if no imageUrl is provided
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body2" color="gray">
          {product.brand}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="white">
          {product.description}
        </Typography>
        <Box display="flex" justifyContent="center">
          <CustomButton variant="contained" fullWidth onClick={addCart}>
            Add to Cart
          </CustomButton>
        </Box>
      </CardContent>
    </CustomCard>
  );
};

export default ProductCard;
