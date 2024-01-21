import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ item, tradeItems }) => {
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    const titem = tradeItems.find(
      (tradeitem) => tradeitem._id === item?.tradeItem
    );
    setItemName(titem?.itemname);
  }, [item, tradeItems]);

  return (
    <Box key={item.tradeItem} sx={{ mb: 2 }}>
      <Typography>{itemName}</Typography>
      <Typography variant="body1">Quantity: {item.quantity}</Typography>
      <Typography>{item.totalPrice}</Typography>
    </Box>
  );
};

export default CartItem;
