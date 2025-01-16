import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../../Helpers/Menu";
import { treat } from "../../../utility/dataseeder";

const Treatment = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh", // Ensuring the container takes the full viewport height
        padding: 2,
        backgroundColor: "#F8FAFC",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          padding: 2,
          backgroundColor: "#F8FAFC",
          height: { xs: "auto", md: "100%" }, // Adjust height for different screen sizes
        }}
      >
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" fontWeight={"bold"}>
            Treatment
          </Typography>
          <Menu data={treat} />
        </Stack>
      </Grid>

      {/* Main Content */}
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          overflow: "hidden",
          backgroundColor: "F8FAFC", // Slight variation for visual distinction
          padding: 2,
          height: { xs: "auto", md: "100%" },
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Treatment;
