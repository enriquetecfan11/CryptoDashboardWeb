import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "160px",
            border: "0.4px solid #282c34",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#0B203",
            color: "white",
          }}
        >
          <Typography variant="h3" gutterBottom alignText="center">
            Welcome to
          </Typography>
          <Typography variant="h2" gutterBottom alignText="center">
            Crypto Dashboard
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "200px",
            }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to="/mainpage"
            >
              Get Started
            </Link>
          </Button>
          <Typography variant="p" gutterBottom alignText="center">
            Made by Enrique Rodriguez Vela
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
