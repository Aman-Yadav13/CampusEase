import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Checkout = ({ cartItems, user }) => {
  const handleCheckout = () => {
    axios
      .post("http://localhost:5000/stripe/create-checkout-session", {
        cartItems,
        userId: user?.result?._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((error) => {
        console.error("Error in Axios request: ", error);
      });
  };

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => handleCheckout()}
      >
        Check Out
      </Button>
    </>
  );
};

export default Checkout;
