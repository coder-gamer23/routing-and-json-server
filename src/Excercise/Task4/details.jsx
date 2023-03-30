import { Box, Button } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Detailspage = () => {
  const Itemsindetailpage = [
    {
      pagename: "Simple Sample",
      onClick: () => {
        navigate("sample");
      },
    },
    {
      pagename: "Simple Demo",
      onClick: () => {
        navigate("demo");
      },
    },
    {
      pagename: "Simple task",
      onClick: () => {
        navigate("task");
      },
    },
  ];
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: "20px",
        height: "100%",
        minHeight: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box><h1>Welcome to Detailspage</h1></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {Itemsindetailpage.map((item) => (
          <Button key={item}  onClick={item.onClick}>
            {item.pagename}
          </Button>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
};

export default Detailspage;
