import React from "react";
import { useTheme, Box, Paper, Typography, Button } from "@mui/material";
import { tokens } from "../theme";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const AnimatedPaper = styled(Paper)`
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ErrorPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const history = useNavigate();
  return (
    <Box
      height="100vh"
      width="100wh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        background:
          "linear-gradient(90deg, rgba(4, 1, 42, 1) 0%, rgba(6, 6, 49, 1) 25%, rgba(11, 101, 119, 1) 100%)",
      }}
    >
      <AnimatedPaper
        sx={{
          backgroundColor: "#1B4965", // Complementary blue
          padding: "40px",
          color: "#FFD700", // Yellow text
        }}
        elevation={6}
      >
        <Typography variant="h3" style={{ color: "#FFA500" }}>
          Oops! Something Went Wrong
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginTop: "20px", color: "#FFFFFF" }}
        >
          We apologize for the inconvenience. Please try again later.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          style={{ marginTop: "30px" }}
          onClick={() => {
            history("/trade");
            window.location.reload();
          }}
        >
          Go Back
        </Button>
      </AnimatedPaper>
    </Box>
  );
};

export default ErrorPage;
