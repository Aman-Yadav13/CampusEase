import React, { useState } from "react";
import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { createTradeItem } from "../../actions/tradeItems";

const TradeForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    itemname: "",
    selectedFile: "",
    description: "",
    price: "",
  });
  const clear = () => {
    setFormData({
      name: "",
      contact: "",
      itemname: "",
      selectedFile: "",
      description: "",
      price: "",
    });
  };
  const handleSubmit = (e) => {
    if (user?.result) {
      e.preventDefault();
      dispatch(createTradeItem({ ...formData }));
      clear();
      window.location.reload();
    } else {
      window.alert("You must Sign In to sell an item.");
      clear();
    }
  };

  return (
    <Box marginLeft="10px" marginRight="10px" flex="30%">
      <Paper className={classes.paper} elevation={6}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">Item to Sell</Typography>
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            name="contact"
            variant="outlined"
            label="Contact"
            fullWidth
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
          <TextField
            name="itemname"
            variant="outlined"
            label="Commodity Name"
            fullWidth
            value={formData.itemname}
            onChange={(e) =>
              setFormData({ ...formData, itemname: e.target.value })
            }
          />
          <TextField
            name="price"
            variant="outlined"
            label="Price"
            fullWidth
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <TextField
            name="description"
            id="outlined-textarea"
            variant="outlined"
            multiline
            label="Description"
            fullWidth
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <div className={classes.fileInput}>
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormData({ ...formData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            sx={{ marginBottom: 1 }}
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default TradeForm;
