import {
  ExpandMore,
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationsIcon,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  ButtonBase,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.svg";
import { avatarpic } from "../utility/color"; // Assuming this is a valid image or color string.

interface NavbarProps {
  onMenuClick: () => void;
}

const handleProfileClick: () => void = () => {
  console.log("clicked on profile");
};

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#F3F6FF",
        }}
      >
        {/* Logo and Menu Icon */}
        <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ display: { xs: "block", md: "none" } }} // Visible on small screens
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <img src={logo} alt="icon" style={{ width: "100px" }} />
        </Box>

        {/* Search Box */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hidden on small screens
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
            maxWidth: "30%", // Adjust as needed for different screen sizes
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: 2,
              width: "100%",
              border: "1px solid",
              borderColor: "#DADAFC",
              pl: 2,
            }}
          >
            <Search sx={{ color: "#DADAFC" }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ ml: 1, width: "100%" }}
            />
          </Box>
        </Box>

        {/* Notifications and Profile */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stack flexDirection="row" gap={4} alignItems="center">
            <IconButton sx={{ display: { xs: "none", md: "block" } }}>
              <Badge badgeContent={1} color="error">
                <NotificationsIcon sx={{ color: "#6968EC" }} />
              </Badge>
            </IconButton>
            <ButtonBase
              onClick={handleProfileClick}
              sx={{
                width: "100%",
                textAlign: "left",
                padding: "0.5rem",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  color: "#6968EC",
                  borderRadius: 10,
                },
              }}
            >
              <Stack
                flexDirection="row"
                gap={1}
                alignItems="center"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Avatar src={avatarpic} />
                <Stack
                  spacing={0.5}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Typography
                    variant="subtitle1"
                    fontFamily="monserrat-regular"
                    color="#444753"
                  >
                    John Doe
                  </Typography>
                  <Typography variant="subtitle2" color="#8F95A9">
                    John Div bola
                  </Typography>
                </Stack>
                <IconButton>
                  <ExpandMore />
                </IconButton>
              </Stack>
            </ButtonBase>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
