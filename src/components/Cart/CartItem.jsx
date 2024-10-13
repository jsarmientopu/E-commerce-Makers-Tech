import React from "react";
import { Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItem({ name, price, units }) {
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
          ${price.toFixed(2)}
        </Typography>
        <IconButton size="small" className="text-white">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
