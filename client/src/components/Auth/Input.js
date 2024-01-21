import React, { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  InputAdornment,
  useTheme,
  IconButton,
} from "@mui/material";
import { tokens } from "../../theme";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = ({
  handleChange,
  name,
  half,
  label,
  autoFocus,
  handleShowPassword,
  type,
}) => {
  const [focus, setfocus] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      {name === "contact" ? (
        <>
          {focus && (
            <Typography
              sx={{
                padding: "4px",
                marginBottom: "5px",
                marginLeft: "2px",
              }}
              color={colors.redAccent[400]}
            >
              Contact Information is needed if you want to access the Buy/Sell
              section.
            </Typography>
          )}
          <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            onFocus={(event) => {
              setfocus(true);
            }}
            InputProps={
              name === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {type === "password" ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : null
            }
          />
        </>
      ) : (
        <TextField
          name={name}
          onChange={handleChange}
          variant="outlined"
          required
          fullWidth
          label={label}
          autoFocus={autoFocus}
          type={type}
          InputProps={
            name === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {type === "password" ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      )}
    </Grid>
  );
};

export default Input;
