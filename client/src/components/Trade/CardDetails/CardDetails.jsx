import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Divider,
  CircularProgress,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTradeItem } from "../../../actions/tradeItems";
import moment from "moment";
import { tokens } from "../../../theme";
import {
  addOneToCart,
  deleteFromCart,
  fetchOrders,
  removeOneFromCart,
} from "../../../actions/orders";
import useStyles from "./styles";
import { addUserOrder } from "../../../api";

const CardDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();
  const history = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tiditem, isLoading } = useSelector((state) => state.tradeItems);
  const { items } = useSelector((state) => state.orders);
  const [isInCart, setIsInCart] = useState(false);
  // console.log(items);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    dispatch(getTradeItem(id));
  }, [dispatch, id]);
  // useEffect(() => {
  //   dispatch(fetchOrders());
  // }, [items]);

  useEffect(() => {
    dispatch(fetchOrders(user?.result._id));
  }, [dispatch, items]);
  if (!tiditem) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const handleAddToCart = () => {
    dispatch(addOneToCart(tiditem._id, user?.result._id));
    setIsInCart(true);
  };
  const handleDeleteFromCart = () => {
    setIsInCart(false);
    dispatch(deleteFromCart(tiditem._id, user?.result._id));
  };

  return (
    <Box marginTop="140px">
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">
              {tiditem.itemname}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {tiditem.message}
            </Typography>
            <Typography variant="h6">Seller: {tiditem.name}</Typography>
            <Typography variant="body1">
              {moment(tiditem.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Button
              onClick={handleAddToCart}
              variant="contained"
              color="success"
              size="large"
            >
              <Typography color={colors.primary[100]}>Add to Cart</Typography>
            </Button>
            {/* {isInCart ? (
              <Button
                onClick={handleDeleteFromCart}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: `${colors.redAccent[600]}`,
                  "&:hover": { backgroundColor: `${colors.redAccent[700]}` },
                }}
              >
                <Typography color={colors.primary[100]}>Remove</Typography>
              </Button>
            ) : null} */}
            {items?.map((item) =>
              item.tradeItem === tiditem?._id ? (
                <Button
                  onClick={handleDeleteFromCart}
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: `${colors.redAccent[600]}`,
                    "&:hover": { backgroundColor: `${colors.redAccent[700]}` },
                  }}
                >
                  <Typography color={colors.primary[100]}>Remove</Typography>
                </Button>
              ) : null
            )}
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                tiditem.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              alt={tiditem.title}
            />
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default CardDetails;
