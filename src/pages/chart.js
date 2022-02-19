import React, { Component } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Box} from "@mui/material";

class chart extends Component {
  render() {
    return (
      <Box>
        <AdvancedRealTimeChart
          colorTheme="light"
          width="100%"
          height={800}
          symbol="BTCUSDT"
          watchlist={[
            "BTCUSDT",
            "ETHUSDT",
            "BNBUSDT",
            "XRPUSDT",
            "LTCUSDT",
            "EOSUSDT",
            "BCHUSDT",
          ]}
          theme="light"
        />
      </Box>
    );
  }
}

export default chart;
