import React, { useState } from "react";
import Chat from "./Chat/Chat";
import {
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useTheme,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from "../../actions/questions";

const Community = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  const { questions } = useSelector((state) => state.questions);
  const [questionData, setQuestionData] = useState({
    name: "",
    question: "",
    answer: "",
  });
  console.log(user);
  const clear = () => {
    setQuestionData({
      name: "",
      question: "",
      answer: "",
    });
  };

  const handleQuestionSubmit = (e) => {
    if (user?.result) {
      e.preventDefault();
      dispatch(createQuestion({ ...questionData, name: user?.result?.name }));
      clear();
      window.location.reload();
    } else {
      window.alert("Sign In to participate in the community discussion.");
      clear();
    }
  };

  return (
    <>
      <Box marginTop="140px">
        {questions?.map((question) => (
          <Accordion
            sx={{
              marginRight: "15px",
              marginLeft: "15px",
              marginBottom: "5px",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {question?.name}: {question?.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
                esse! Ab nemo velit consequuntur quam aspernatur unde. Dicta at
                doloribus, distinctio sequi iusto accusantium consequuntur unde
                error ex cum? Sint.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button
          className={classes.buttonSubmit}
          size="large"
          sx={{
            position: "fixed",
            bottom: "10px",
            left: "20px",
            width: "10%",
          }}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          onClick={handleQuestionSubmit}
        >
          Answer it
        </Button>
        <TextField
          sx={{
            width: "95%",
            position: "fixed",
            bottom: "65px",
            marginLeft: "20px",
            marginRight: "20px",
            bgcolor: colors.greenAccent[600],
          }}
          id="outlined-textarea"
          label="Enter your question"
          multiline
          value={questionData.question}
          onChange={(e) =>
            setQuestionData({ ...questionData, question: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          size="large"
          sx={{ position: "fixed", bottom: "10px", left: "20px", width: "10%" }}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          onClick={handleQuestionSubmit}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Community;
