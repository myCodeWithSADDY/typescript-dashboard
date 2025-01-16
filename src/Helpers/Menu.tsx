import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { Link, useLocation } from "react-router-dom";

export interface MenuProps {
  data: { id: number; label: string; to?: string }[]; // Menu item data
  title?: string; // Optional title to handle different routes
}

export default function Menu({ data, title }: MenuProps) {
  const location = useLocation();

  return (
    <Paper>
      <MenuList sx={{ bgcolor: "#F3F6FF" }}>
        {data.map((item) => (
          <Link
            key={item.id}
            to={item.to || "#"}
            style={{
              textDecoration: "none",
              color: "#71788E",
              fontWeight: "bold",
            }}
          >
            <MenuItem
              sx={{
                p: 2,
                backgroundColor: location.pathname.endsWith(
                  `/${title}${item.to}`
                )
                  ? "#FFFFFF"
                  : "#F3F6FF",
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
    </Paper>
  );
}
