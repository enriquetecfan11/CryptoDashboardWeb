import React, { Component } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Box, Paper } from "@mui/material";
import './styles.css'

class chart extends Component {
  render() {
    return (
      <div id="chart">
        <Paper>
          <Box
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <AdvancedRealTimeChart
              colorTheme="dark"
              width="100%"
              height={800}
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
          </Box>
        </Paper>
      </div>
    );
  }
}

export default chart;
