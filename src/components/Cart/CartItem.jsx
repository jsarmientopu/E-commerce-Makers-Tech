import React, { useContext } from "react";
import { Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../App";
import Swal from "sweetalert2";

const CartItem = ({ productId, name, price, units }) => {
  const { items, setItems } = useContext(CartContext);
  const handleDelete = () => {
    var updatedArray = [];
    var i;
    for (i = 0; i < items.length; i++) {
      if (items[i].productId != productId) {
        updatedArray.push(items[i]);
      }
    }
    setItems(updatedArray);
  };
  console.log(items);

  return (
    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
      <div>
        <Typography variant="body1" className="font-bold">
          {name}
        </Typography>
        <Typography variant="body2" className="text-gray-400">
          Units: {units}
        </Typography>
      </div>
      <div className="text-right">
        <Typography variant="body1" className="text-purple-500 font-bold">
          ${price}
        </Typography>
        <IconButton
          size="small"
          className="text-white"
          style={{ color: "white" }}
          onClick={() => {
            handleDelete();
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
