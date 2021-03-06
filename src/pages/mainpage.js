import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// pages
import LiveCoin from "./livecoin";
import Market from "./market";
import Chart from "./chart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Mainpage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "#1E222D" }}>
      <AppBar position="static" fullwidth>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          overflow="scroll"
        >
          <Tab label="Coin List" {...a11yProps(0)} />
          <Tab label="Market" {...a11yProps(1)} />
          <Tab label="Chart" {...a11yProps(2)} />
          <Tab label="Porfolio" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <LiveCoin />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Market />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Chart />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Typography> Tab under construction </Typography>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default Mainpage;
