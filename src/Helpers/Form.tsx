import { Add } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { final } from "../utility/dataseeder";

const sub = "Treatment";

interface FormProps {
  title: string;
}

const Form: React.FC<FormProps> = ({ title = "Skin Improvement (4)" }) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClickDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenDropdown(true);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setOpenDropdown(false);
  };

  return (
    <Paper sx={{ padding: 2, backgroundColor: "#F3F6FF" }}>
      <Stack spacing={2}>
        {/* Title and Subtext */}
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {sub}
        </Typography>

        {/* Menu List */}
        <MenuList>
          {final.map((item) => (
            <Link
              key={item.id}
              to={item.to || "#"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem
                sx={{
                  p: 2,
                  backgroundColor: location.pathname.endsWith(`/${item.to}`)
                    ? "#FFFFFF"
                    : "white",
                  "&:hover": {
                    backgroundColor: "#E3EFFF",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Stack>

      {/* Dropdown Menu Trigger with Add Button */}
      <Paper sx={{ mt: 2, padding: 2, backgroundColor: "#F3F6FF" }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs>
            <Button
              onClick={handleClickDropdown}
              variant="outlined"
              fullWidth
              sx={{ textAlign: "left" }}
            >
              Open Dropdown
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              onClick={() => console.log("Add clicked")}
            >
              <Add />
            </IconButton>
          </Grid>
        </Grid>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={openDropdown}
          onClose={handleCloseDropdown}
          MenuListProps={{
            "aria-labelledby": "dropdown-button",
          }}
        >
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemText primary="Option 1" />
          </MenuItem>
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemText primary="Option 2" />
          </MenuItem>
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemText primary="Option 3" />
          </MenuItem>
        </Menu>
      </Paper>

      {/* Buttons for Save and Cancel */}
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        width="100%"
        mt={3}
      >
        <Button
          variant="outlined"
          fullWidth
          sx={{ color: "#6968EC", borderRadius: 3 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#6968EC", color: "#FFF", borderRadius: 3 }}
        >
          Save
        </Button>
      </Stack>
    </Paper>
  );
};

export default Form;
