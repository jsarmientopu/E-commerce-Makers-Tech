import React, { useState, useContext } from "react";
import { Drawer, IconButton, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary";
import { CartContext } from "../../App.jsx";

const CartDrawer = () => {
  const { items, setItems } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Shopping Cart Icon Button */}
      <IconButton
        onClick={toggleDrawer}
        style={{ color: "white" }}
        className="flex flex-row p-4"
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
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                units={item.units}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <CartSummary cartItems={items} />
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
