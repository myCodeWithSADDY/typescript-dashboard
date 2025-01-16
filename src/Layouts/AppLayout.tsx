import { Drawer, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isMobileOpen, setMobileOpen] = useState<boolean>(false);

  const toggleMobileDrawer = () => {
    setMobileOpen(!isMobileOpen);
  };

  return (
    <Grid container mt={8} sx={{ height: "50vh", backgroundColor: "#F8FAFC" }}>
      {/* Navbar */}
      <Grid item xs={12} md={1}>
        <Navbar onMenuClick={toggleMobileDrawer} />
      </Grid>

      {/* Sidebar and Main Content */}
      <Grid container>
        {/* Sidebar */}
        <Grid
          item
          md={1}
          px={6}
          sx={{ display: { xs: "none", md: "block" }, bgcolor: "#F8FAFC" }}
        >
          <Sidebar />
        </Grid>

        {/* Main Content */}
        <Grid
          item
          xs={12}
          md={11}
          pt={2}
          sx={{ overflow: "auto", bgcolor: "#F8FAFC" }}
        >
          <Outlet />
        </Grid>
      </Grid>

      {/* Drawer for Mobile Sidebar */}
      <Drawer open={isMobileOpen} onClose={toggleMobileDrawer}>
        <Typography variant="h6" px={"2rem"} p={"1rem"}>
          Logo
        </Typography>
        <Sidebar width="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
