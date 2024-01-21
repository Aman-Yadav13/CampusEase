import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";
import CardActions from "@mui/material/CardActions";
import { Button, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useNavigate } from "react-router-dom";

const ActionCard = ({ tradeitem, colors }) => {
  const classes = useStyles();
  const history = useNavigate();

  const readMore = () => {
    history(`/trade/${tradeitem._id}`);
  };

  return (
    <>
      <Card className={classes.card} raised elevation={6}>
        <CardMedia
          // component="img"
          // height="140"
          // sx={{ objectFit: "scale-down" }}
          className={classes.media}
          image={
            tradeitem.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
        />
        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          marginTop="10px"
          variant="h5"
          component="h2"
          sx={{ fontWeight: "300" }}
        >
          {tradeitem.itemname}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {tradeitem.description}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            marginTop="10px"
            color={colors.redAccent[400]}
          >
            ${tradeitem.price}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton aria-label="delete" onClick={readMore}>
            <ReadMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default ActionCard;
