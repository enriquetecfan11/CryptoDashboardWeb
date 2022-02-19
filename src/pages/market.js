import React, { Component } from "react";
import { TechnicalAnalysis, Timeline } from "react-ts-tradingview-widgets";
import { Box, Typography } from "@mui/material";

class Market extends Component {
  render() {
    return (
      <Box
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Typography variant="h6" style={{ marginBottom: "20px" }}>
          Technical Analysis
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <TechnicalAnalysis
            colorTheme="light"
            width={350}
            height={500}
            symbol="BTCUSDT"
            theme="light"
          />
          <TechnicalAnalysis
            colorTheme="light"
            width={350}
            height={500}
            symbol="ETHUSDT"
            theme="light"
            style={{ paddingRight: "50px" }}
          />
            <TechnicalAnalysis
            colorTheme="light"
            width={350}
            height={500}
            symbol="USDTUSD"
            theme="light"
          />
          <TechnicalAnalysis
            colorTheme="light"
            width={350}
            height={500}
            symbol="BNBUSDT"
            theme="light"
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
            colorTheme="light"
            feedMode="market"
            market="crypto"
            height={400}
            width="100%"
            locale="en"
          ></Timeline>
        </Box>
      </Box>
    );
  }
}
export default Market;
