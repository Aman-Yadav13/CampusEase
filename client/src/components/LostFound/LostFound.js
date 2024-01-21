import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  useTheme,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tokens } from "../../theme";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { createItem, getItems, searchItems } from "../../actions/items";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ colors }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colors.blueAccent[800],
    color: colors.primary[100],
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ colors }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: colors.primary[300],
  },
  "&:nth-of-type(even)": {
    backgroundColor: colors.primary[400],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const LostFound = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { items } = useSelector((state) => state.items);

  const colors = tokens(theme.palette.mode);
  const [searchFilter, setSearchFilter] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [itemData, setItemData] = useState({
    item: "",
    specification: "",
    placeFound: "",
    name: "",
    contact: "",
  });

  const handleSubmit = (e) => {
    if (user?.result) {
      e.preventDefault();
      dispatch(createItem({ ...itemData }));
      clear();
      window.location.reload();
    } else {
      window.alert("You must Sign In to enter a item you found.");
      clear();
    }
  };
  const searchSubmit = () => {
    setSearchItems(items.filter((item) => item.item === searchFilter));
    console.log(searchItems);
  };

  const clear = () => {
    setItemData({
      item: "",
      specification: "",
      placeFound: "",
      name: "",
      contact: "",
    });
  };
  return (
    <Box sx={{ marginLeft: "80px", marginTop: "120px" }}>
      <Grid container spacing={3}>
        <Grid item md={7}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell colors={colors}>
                    <Typography variant="h5" color={colors.primary[100]}>
                      Item&nbsp;Name
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell colors={colors} align="right">
                    <Typography variant="h5" color={colors.primary[100]}>
                      Place&nbsp;Found
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell colors={colors} align="right">
                    <Typography variant="h5" color={colors.primary[100]}>
                      Student&nbsp;Name
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell colors={colors} align="right">
                    <Typography variant="h5" color={colors.primary[100]}>
                      Connect
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchItems.length == 0 ? (
                  <>
                    {items?.map((item) => (
                      <StyledTableRow colors={colors} key={item?.name}>
                        <StyledTableCell
                          colors={colors}
                          component="th"
                          scope="row"
                        >
                          {item?.item}
                        </StyledTableCell>
                        <StyledTableCell colors={colors} align="right">
                          {item?.placeFound}
                        </StyledTableCell>
                        <StyledTableCell colors={colors} align="right">
                          {item?.name}
                        </StyledTableCell>
                        <StyledTableCell colors={colors} align="right">
                          <Button
                            className={classes.buttonSubmit}
                            sx={{
                              marginBottom: 1,
                              color: `${colors.primary[100]}`,
                            }}
                            variant="contained"
                            size="small"
                            color="primary"
                            type="submit"
                            onClick={() => {
                              history("/chat");
                              window.location.reload();
                            }}
                          >
                            Connect
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </>
                ) : (
                  <>
                    {searchItems?.map((item) => (
                      <StyledTableRow colors={colors} key={item?.name}>
                        <StyledTableCell
                          colors={colors}
                          component="th"
                          scope="row"
                        >
                          {item?.item}
                        </StyledTableCell>

                        <StyledTableCell colors={colors} align="right">
                          {item?.placeFound}
                        </StyledTableCell>
                        <StyledTableCell colors={colors} align="right">
                          {item?.name}
                        </StyledTableCell>
                        <StyledTableCell colors={colors} align="right">
                          <Button
                            className={classes.buttonSubmit}
                            sx={{
                              marginBottom: 1,
                              color: `${colors.primary[100]}`,
                            }}
                            variant="contained"
                            size="small"
                            color="primary"
                            type="submit"
                            onClick={() => {
                              history("/chat");
                              window.location.reload();
                            }}
                          >
                            Connect
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper} elevation={6}>
            <form
              autoComplete="off"
              noValidate
              className={`${classes.root} ${classes.form}`}
              onSubmit={handleSubmit}
            >
              <Typography variant="h5">Found an Item</Typography>
              <TextField
                name="item"
                variant="outlined"
                label="Item name"
                fullWidth
                value={itemData.item}
                onChange={(e) =>
                  setItemData({ ...itemData, item: e.target.value })
                }
              />
              <TextField
                name="specification"
                variant="outlined"
                label="Specification"
                fullWidth
                value={itemData.specification}
                onChange={(e) =>
                  setItemData({ ...itemData, specification: e.target.value })
                }
              />
              <TextField
                name="placeFound"
                variant="outlined"
                label="Place Found"
                fullWidth
                value={itemData.placeFound}
                onChange={(e) =>
                  setItemData({ ...itemData, placeFound: e.target.value })
                }
              />
              <TextField
                name="name"
                variant="outlined"
                label="Student Name"
                fullWidth
                value={itemData.name}
                onChange={(e) =>
                  setItemData({ ...itemData, name: e.target.value })
                }
              />
              <TextField
                name="contact"
                variant="outlined"
                label="Contact"
                fullWidth
                value={itemData.contact}
                onChange={(e) =>
                  setItemData({ ...itemData, contact: e.target.value })
                }
              />
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
          <Paper
            className={classes.paper}
            elevation={6}
            sx={{ marginTop: "10px" }}
          >
            <Typography
              sx={{ textAlign: "center", marginBottom: "10px" }}
              variant="h5"
            >
              Search Item
            </Typography>
            <TextField
              name="searchFilter"
              variant="outlined"
              label="Search Item"
              fullWidth
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <Button
              className={classes.buttonSubmit}
              sx={{ marginTop: "4px" }}
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              fullWidth
              onClick={searchSubmit}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LostFound;
