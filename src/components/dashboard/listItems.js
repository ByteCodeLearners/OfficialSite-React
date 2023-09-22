import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <NavLink to="regsetting">
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
    </NavLink>
    <NavLink to="members">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Members" />
      </ListItemButton>
    </NavLink>
    <NavLink to="gallery">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      </ListItemButton>
    </NavLink>
    <NavLink to="events">
      <ListItemButton>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Events" />
      </ListItemButton>
    </NavLink>
    <NavLink to="prveve">
      <ListItemButton>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Prev Events" />
      </ListItemButton>
    </NavLink>

    <NavLink to="/login">
      <ListItemButton
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
