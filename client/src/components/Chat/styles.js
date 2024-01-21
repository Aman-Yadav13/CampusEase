import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  mainBg: {
    backgroundColor: "#565ea9",
    height: "100vh",
    width: "100wh",
    overflow: "hidden",
  },
  chatHeader: {
    backgroundColor: "#a95688",
    width: "100vw",
  },
  customTextField: {
    "& label.Mui-focused": {
      color: "black",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
      },
    },
  },
  mainContainer: {
    height: "100vh",
    color: "black",
    width: "90vw",
    margin: "auto",
    overflow: "hidden",
  },
  subContainer: {
    borderRadius: "5px",
    backgroundColor: "white",
    marginTop: "30px",
    height: "95vh",
  },
  content: {
    display: "flex",
    zIndex: "100",
    overflow: "hidden",
    flexDirection: "column",
    height: "100%",
  },
  infoBar: {
    backgroundColor: "#20df96",
    minHeight: "50px",
    marginTop: "-30px",
  },
  subContent: {
    display: "flex",
  },
  usersInfo: {
    minWidth: "200px",
    backgroundColor: "#3780c8",
  },
  chatBox: {
    display: "flex",
    width: "100%",
    paddingBottom: "2px",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "719px",
  },
  textField: {
    width: "65vw",
    height: "40px",
    borderRadius: "0",
  },

  chatMessagesSection: {
    height: "82vh",
    overflow: "auto",
  },

  chatMessagesSubSection: {
    display: "flex",
    flexDirection: "column",
    padding: "4px",
  },
  chatInput: {
    position: "sticky",
    bottom: "0",
  },
  userStatusText: {
    textAlign: "center",
  },

  chat_message_right: {
    display: "flex",
    flexShrink: "0",
    marginLeft: "auto",
  },
  chat_message_left: {
    display: "flex",
    flexShring: "0",
    flexDirection: "row-reverse",
    marginRight: "auto",
  },
  avatar: {
    borderRadius: "50%",
    marginRight: "5px",
    marginLeft: "5px",
  },
  timediv: {
    color: "#B3BBB3",
    whiteSpace: "nowrap",
    fontSize: "10px",
    marginTop: "2px",
  },
  messageDiv: {
    flexShrink: "1",
    backgroundColor: "#B3BBB3",
    borderRadius: "5px",
    padding: "5px 10px 5px 10px",
    marginLeft: "10px",
    marginBottom: "10px",
  },
  messageText: {
    fontWeight: "bold",
    marginBottom: "3px",
  },
}));
