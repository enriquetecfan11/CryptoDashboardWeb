import React, { Component } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Box, Paper, Chart } from "@mui/material";
import "./styles.css";

class chart extends Component {
  render() {
    return (
      <Box
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Paper>
          <AdvancedRealTimeChart
            colorTheme="dark"
            width="100%"
            height={750}
            symbol="BTCUSDT"
            watchlist={[
              "BTCUSDT",
              "ETHUSDT",
              "BNBUSDT",
              "ROSEUSDT",
              "LTCUSDT",
              "BCHUSDT",
            ]}
            theme="dark"
            hotlist="true"
            calendar="true"
            details="true"
          />
        </Paper>
      </Box>
    );
  }
}

export default chart;
