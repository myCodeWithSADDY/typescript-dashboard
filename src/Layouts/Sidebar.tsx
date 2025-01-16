import React from "react";
import { Badge, IconButton, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  InboxOutlined as InboxIcon,
  DateRangeRounded as DateRangeRoundedIcon,
  Reviews as ReviewsIcon,
  Settings as SettingsIcon,
  ExitToApp,
} from "@mui/icons-material";

const adminTabs = [
  { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { name: "Inbox", path: "/inbox", icon: <InboxIcon />, badge: 2 },
  { name: "Schedule", path: "/schedule", icon: <DateRangeRoundedIcon /> },
  { name: "Reviews", path: "/reviews", icon: <ReviewsIcon />, badge: 6 },
  { name: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

const Sidebar = ({ width = "100%", height = "100vh" }) => {
  const location = useLocation();

  return (
    <Stack
      width={width}
      height={height}
      flexDirection="column"
      alignItems={"center"}
      bgcolor="#F9F9FB"
      py={4}
      gap={6}
    >
      <Stack spacing={2}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            style={{
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              backgroundColor:
                location.pathname === tab.path ? "#e0e0e0" : "transparent",
              transition: "background-color 0.3s",
            }}
          >
            <Stack
              direction={"row"}
              flexDirection="column"
              alignItems="center"
              spacing={1}
            >
              {tab.badge ? (
                <Badge badgeContent={tab.badge} color="error">
                  {tab.icon}
                </Badge>
              ) : (
                tab.icon
              )}
              <Typography variant="subtitle2">{tab.name}</Typography>
            </Stack>
          </Link>
        ))}
      </Stack>
      <Stack flexDirection={"column"} alignItems={"center"}>
        <IconButton>
          <ExitToApp />
        </IconButton>
        <Typography variant="caption">LogOut</Typography>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
