import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardHeader = () => {
  const pathname = usePathname();
  let headerText = "";

  switch (pathname) {
    case "/completed":
      headerText = "Completed Tasks";
      break;
    case "/in-progress":
      headerText = "In Progress Tasks";
      break;
    case "/pending":
      headerText = "Pending Tasks";
      break;
    case "/":
      headerText = "All Tasks";
      break;
    default:
      headerText = "Dashboard";
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1E5F74" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {headerText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
