import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
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
    margin: "5px",
    backgroundColor: "#E74242",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "15px",
  },
  submit: {
    margin: "20px 0 15px",
  },
  googleButton: {
    marginBottom: "10px",
  },
}));
