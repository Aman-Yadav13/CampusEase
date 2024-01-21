import React, { useState, useEffect } from "react";

import ActionCard from "./Card/Card";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Grid, useTheme, CircularProgress, Button } from "@mui/material";
import { tokens } from "../../theme";
import TradeForm from "../TradeForm/TradeForm";
import Cart from "./Cart/Cart";
import { fetchOrders, getTotalCosts } from "../../actions/orders";

const Trade = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { tradeItems, isLoading } = useSelector((state) => state.tradeItems);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { items, totalCosts } = useSelector((state) => state.orders);

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(fetchOrders(user?.result._id));
    dispatch(getTotalCosts(user?.result._id));
  }, [dispatch]);

  return (
    <Box
      sx={{ marginTop: "180px" }}
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Button
        sx={{
          width: "180px",
          position: "absolute",
          right: 10,
          top: -50,
        }}
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        onClick={handleOpen}
      >
        Cart {0} items
      </Button>

      <Cart tradeItems={tradeItems} isOpen={isOpen} setIsOpen={setIsOpen} />

      <Box
        sx={{ marginLeft: "20px" }}
        display="flex"
        justifyContent="space-between"
      >
        <Box
          flex="70%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          {isLoading ? (
            <CircularProgress size="5rem" />
          ) : (
            <Grid
              className={classes.container}
              container
              alignItems="stretch"
              spacing={3}
            >
              {tradeItems.map((tradeitem) => (
                <Grid key={tradeitem._id} item xs={12} sm={12} md={6} lg={3}>
                  <ActionCard tradeitem={tradeitem} colors={colors} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        <TradeForm />
      </Box>
    </Box>
  );
};

export default Trade;
