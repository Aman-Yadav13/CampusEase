import React from "react";
// import Tru from "./tru";
import ActionCard from "./Card/Card";
import { Box, Grid, List, ListItem, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Trade = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>Trade</div>
    // <Box sx={{ marginTop: "140px" }}>
    //   <Box
    //     flex="75%"
    //     backgroundColor={colors.primary[400]}
    //     p="15px"
    //     borderRadius="4px"
    //   >
    //     <List>
    //       <Grid container spacing={2}>
    //         {tradeItems.map((tradeitem) => {
    //           <Grid item md={4}>
    //             <ListItem key={tradeitem.name}>
    //               <ActionCard tradeitem={tradeitem} />
    //             </ListItem>
    //           </Grid>;
    //         })}
    //       </Grid>
    //     </List>
    //   </Box>
    // </Box>
  );
};

export default Trade;
