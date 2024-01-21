import React from "react";
import { Grid, ListItem, Box, Typography, useTheme, List } from "@mui/material";
import { tokens } from "../../theme";
import "./styles.css";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box sx={{ marginTop: "140px" }}>
        <Box
          sx={{ marginLeft: "20px", marginRight: "20px" }}
          display="flex"
          justifyContent="space-between"
        >
          <Box
            flex="100%"
            backgroundColor={colors.primary[400]}
            p="15px"
            borderRadius="4px"
            sx={{ marginBottom: "20px" }}
          >
            <Typography
              sx={{ textAlign: "center", marginBottom: "20px" }}
              variant="h3"
              color={colors.blueAccent[100]}
            >
              About Our Application
            </Typography>
            <List>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <ListItem
                    key={0}
                    sx={{
                      height: "200px",
                      backgroundColor: colors.greenAccent[600],
                      margin: "10px 0",
                      borderRadius: "2px",
                    }}
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="h4"
                        sx={{
                          marginBottom: "10px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Trade Section
                      </Typography>
                      <Typography component="div">
                        Our Buy and Sell/Trade section within the application is
                        designed to revolutionize your buying and selling
                        experience. With a user-friendly interface, finding or
                        listing items is a breeze. Sellers can effortlessly
                        upload product images and descriptions, ensuring that
                        their listings stand out.Buyers benefit from advanced
                        search filters, making it easy to discover exactly what
                        they're looking for. Safety is a top priority, with
                        secure payment options and a rating system that promotes
                        trust within the community.Whether you're a seasoned
                        seller or a savvy shopper, our Buy and Sell section
                        elevates your online marketplace experience to new
                        heights.
                      </Typography>
                    </Box>
                  </ListItem>
                </Grid>
                <Grid item md={6}>
                  <ListItem
                    key={1}
                    sx={{
                      backgroundColor: colors.greenAccent[600],
                      height: "200px",

                      margin: "10px 0",
                      borderRadius: "2px",
                    }}
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="h4"
                        sx={{
                          marginBottom: "10px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Lost and Found Section
                      </Typography>
                      <Typography component="div">
                        The Lost and Found section in our application offers a
                        seamless and user-friendly experience for users dealing
                        with lost or found items. With a convenient reporting
                        system, users can quickly document their lost
                        possessions, providing item descriptions, dates, and
                        locations. The platform's robust search functionality
                        enables efficient matching of lost and found items, with
                        real-time updates and notifications for potential
                        matches. Security is paramount, with secure item storage
                        and privacy settings ensuring user data protection.
                        Users can connect with the community for support. This
                        feature-rich section integrates seamlessly with maps,
                        tracks found items, maintains a history of lost items,
                        and is accessible 24/7 for users' convenience.
                      </Typography>
                    </Box>
                  </ListItem>
                </Grid>
                <Grid item md={6}>
                  <ListItem
                    key={2}
                    sx={{
                      height: "280px",

                      backgroundColor: colors.greenAccent[600],
                      margin: "10px 0",
                      borderRadius: "2px",
                    }}
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="h4"
                        sx={{
                          marginBottom: "10px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Event Section
                      </Typography>
                      <Typography component="div">
                        The Events section of our application is your go-to hub
                        for staying informed and organized within your college
                        community. We meticulously curate and organize a
                        comprehensive list of college events, ensuring you never
                        miss out on the latest happenings. What sets us apart is
                        our integrated calendar feature, allowing you to
                        seamlessly schedule and track events that pique your
                        interest. With a simple tap, you can add any event to
                        your personalized calendar, making planning your college
                        life a breeze. Say goodbye to missed lectures, sports
                        games, or club meetings. Our Events section brings your
                        college's vibrant activities to your fingertips, making
                        it easier than ever to stay engaged and connected.
                        Explore, schedule, and be an active part of your
                        college's social and academic life with our Events
                        feature.
                      </Typography>
                    </Box>
                  </ListItem>
                </Grid>
                <Grid item md={6}>
                  <ListItem
                    key={3}
                    sx={{
                      height: "280px",

                      backgroundColor: colors.greenAccent[600],
                      margin: "10px 0",
                      borderRadius: "2px",
                    }}
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="h4"
                        sx={{
                          marginBottom: "10px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Community
                      </Typography>
                      <Typography component="div">
                        Our Community section in the application is the heart of
                        our platform, where users come together to connect,
                        engage, and collaborate like never before. This vibrant
                        space offers a wide array of features that empower users
                        to build strong connections and foster meaningful
                        relationships.Within the Community section, you can join
                        or create groups based on your interests, hobbies, or
                        local affiliations. These groups act as virtual hubs for
                        discussions, sharing knowledge, and organizing events.
                        Our forums provide a platform for open and respectful
                        dialogue on a multitude of topics, ensuring diverse
                        perspectives are heard and respected.Within the
                        Community section, you can join or create groups based
                        on your interests, hobbies, or local affiliations. These
                        groups act as virtual hubs for discussions, sharing
                        knowledge, and organizing events.Whether you're seeking
                        advice, sharing your passion, or making new friends, our
                        Community section is the ultimate destination for
                        meaningful connections and collaboration. Join us and be
                        a part of something bigger than yourself.
                      </Typography>
                    </Box>
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
