import React, { Component } from "react";
import { TechnicalAnalysis, Timeline } from "react-ts-tradingview-widgets";
import { Box, Typography } from "@mui/material";

class Market extends Component {
  render() {
    return (
      <Box style={{ width: "100%", height: "100%" }}>
        <Box
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row-wrap",
              marginBottom: "20px",
            }}
          >
            <TechnicalAnalysis
              colorTheme="dark"
              width={450}
              height={500}
              symbol="BTCUSDT"
              theme="dark"
            />
            <TechnicalAnalysis
              colorTheme="dark"
              width={450}
              height={500}
              symbol="ETHUSDT"
              theme="dark"
              style={{ marginRight: "50px" }}
            />
            <TechnicalAnalysis
              colorTheme="dark"
              width={450}
              height={500}
              symbol="USDTUSD"
              theme="dark"
            />
            <TechnicalAnalysis
              colorTheme="dark"
              width={450}
              height={500}
              symbol="BNBUSDT"
              theme="dark"
              style={{ paddingRight: "50px" }}
            />
          </Box>
          <Box
            style={{
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" style={{ marginBottom: "20px" }}>
              Crypto News
            </Typography>
            <Timeline
              colorTheme="dark"
              feedMode="market"
              market="crypto"
              height={400}
              width="100%"
              locale="en"
            ></Timeline>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Market;
