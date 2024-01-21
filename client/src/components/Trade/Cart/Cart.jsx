import React, { useState } from "react";
import { Box, Typography, Modal, useTheme, Button } from "@mui/material";
import { tokens } from "../../../theme";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";
const Cart = ({ isOpen, setIsOpen, tradeItems }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { items, totalCosts } = useSelector((state) => state.orders);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const orderInfo = items
    .map((item) => {
      const tradeItem = tradeItems.find(
        (titem) => titem._id === item.tradeItem
      );

      if (tradeItem) {
        return {
          orderitem: item,
          tradeitem: tradeItem,
        };
      }
      return null;
    })
    .filter((order) => order !== null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: `3px 3px 3px ${colors.primary[300]}`,
    p: 4,
    bgcolor: `${colors.primary[400]}`,
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h2">
          Cart
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {items.map((item) => (
            <CartItem
              key={item.tradeItem}
              item={item}
              tradeItems={tradeItems}
            />
          ))}
          {totalCosts}
        </Typography>
        <Checkout user={user} cartItems={orderInfo} />
      </Box>
    </Modal>
  );
};

export default Cart;
