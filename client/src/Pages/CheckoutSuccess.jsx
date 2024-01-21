import React from "react";
import { useTheme, Box, Paper, Typography } from "@mui/material";
import { tokens } from "../theme";
import { styled } from "@mui/system";

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

const CheckoutSuccess = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          backgroundColor: "#007BFF",
          padding: "20px",
          color: "#FFFFFF",
        }}
        elevation={6}
      >
        <Typography variant="h3">Thank You for Your Purchase!</Typography>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
          Your payment was successful.
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
          We appreciate your business and will be in touch shortly.
        </Typography>
      </AnimatedPaper>
    </Box>
  );
};

export default CheckoutSuccess;
