import { useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Menu from "../Helpers/Menu";
import { nest1 } from "../utility/dataseeder";

const Setting = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh", // Ensure the grid takes the full viewport height
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
        md={2}
        sx={{
          padding: 2,
          backgroundColor: "#F8FAFC",
          height: { xs: "auto", md: "100%" },
        }}
      >
        <Stack direction="column" spacing={1}>
          <Typography variant="h5" fontWeight={"bold"}>
            Settings
          </Typography>
          <Menu data={nest1} />
        </Stack>
      </Grid>

      {/* Main Content */}
      <Grid
        item
        xs={12}
        md={10}
        mt={2}
        sx={{
          overflow: "hidden",
          backgroundColor: "#F8FAFC", // Assuming main content might need a different background

          height: { xs: "auto", md: "100%" },
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Setting;
