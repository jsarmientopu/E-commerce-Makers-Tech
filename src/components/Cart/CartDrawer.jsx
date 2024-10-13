import React, { useState } from "react";
import { Drawer, IconButton, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const cartItems = [
    { id: 1, name: "T-Shirt", price: 19.99, units: 2 },
    { id: 2, name: "Sneakers", price: 79.99, units: 1 },
    { id: 3, name: "Jeans", price: 39.99, units: 1 },
  ];

  return (
    <>
      {/* Shopping Cart Icon Button */}
      <IconButton
        onClick={toggleDrawer}
        style={{ color: "white" }}
        classname="flex flex-row p-4"
      >
        <ShoppingCartIcon fontSize="small" />
      </IconButton>

      {/* Drawer for Cart */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{ borderRadius: 100 }}
      >
        <div className="w-80 overflow-auto h-full flex flex-col  bg-black text-white p-4 rounded-l-lg r">
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
            className="text-purple-500 mb-4 font-bold"
          >
            Your Cart
          </Typography>

          {/* List of Cart Items */}
          <div className="flex flex-col space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                units={item.units}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <CartSummary cartItems={cartItems} />
        </div>
      </Drawer>
    </>
  );
}
