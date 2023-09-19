import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: "5px",
    },
  },
  avatar: {
    margin: "10px",
    backgroundColor: "#E74242",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "15px",
  },
  submit: {
    margin: "15px 0 10px",
  },
  googleButton: {
    marginBottom: "10px",
  },
}));
