<<<<<<< HEAD
import React from "react";
import DrawerList from "../DrawerList";

export default function Sidebar() {
  return (
    <>
      <h1>Hello World</h1>;
=======
import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "../NavItem";

const user = {
  avatar: null,
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
};

const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/customers",
    icon: UsersIcon,
    title: "Customers",
  },
  {
    href: "/app/products",
    icon: ShoppingBagIcon,
    title: "Products",
  },
  {
    href: "/app/account",
    icon: UserIcon,
    title: "Account",
  },
  {
    href: "/app/settings",
    icon: SettingsIcon,
    title: "Settings",
  },
  {
    href: "/login",
    icon: LockIcon,
    title: "Login",
  },
  {
    href: "/register",
    icon: UserPlusIcon,
    title: "Register",
  },
  {
    href: "/404",
    icon: AlertCircleIcon,
    title: "Error",
  },
];

export default function Sidebar() {
  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: "pointer",
            width: 64,
            height: 64,
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: "background.default",
          m: 2,
          p: 2,
        }}
      >
        <Typography align="center" gutterBottom variant="h4">
          Need more?
        </Typography>
        <Typography align="center" variant="body2">
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: "calc(100% - 64px)",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
>>>>>>> afe0e0c29c7b00a23ed39b22eb85e4513f66517d
    </>
  );
}