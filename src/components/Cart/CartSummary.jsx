import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

const CartSummary = ({ cartItems }) => {
  // Calculate the total price
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartItems.reduce((sum, item) => sum + item.price * item.units, 0));
  }, [cartItems]);

  return (
    <div className="mt-6 flex flex-col gap-2">
      <div className="flex justify-between">
        <Typography variant="body1" className="font-bold">
          Total:
        </Typography>
        <Typography variant="h6" className="text-purple-500">
          ${total}
        </Typography>
      </div>

      <Button
        style={{
          backgroundColor: "#7e22ce",
        }}
        variant="contained"
        className="bg-purple-700 hover:bg-purple-300 w-full mt-4 text-white"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};
export default CartSummary;
