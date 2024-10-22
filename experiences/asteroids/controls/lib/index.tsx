/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useCallback, useState } from "react";
import { useMessaging } from "@footron/controls-client";
import {
  Box,
  AppBar,
  Toolbar,
  Backdrop,
  Tab,
  Tabs,
} from "@material-ui/core";

import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import FlyTo from "./FlyTo";
import SettingsMenu from "./SettingsMenu";
import TimeSlider from "./timeSlider";
import AsteroidWatch from "./AsteroidWatch";
import ZoomControls from "./zoom";
import Learn from "./Learn";
import Info from "./Info";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ControlsComponent = (): JSX.Element => {
  const { sendMessage } = useMessaging();
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState(1);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleOpenSettings = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickAwaySettings = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setMenuOpen(false);
  };

  const getWatch = () => {
    sendMessage({ type: "context", value: "watch" });
  };

  const getFly = () => {
    sendMessage({ type: "context", value: "fly" });
  };

  const getLearn = () => {
    sendMessage({ type: "context", value: "learn" });
  };

  return (
    <Box p={2}>
      <Box>
        <AppBar
          position="fixed"
          style={{ top: "auto", bottom: 0, height: "min(60px, 10vh)" }}
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              overflow: "auto",
            }}
          >
            {menuOpen ? (
              <CloseIcon />
            ) : (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleOpenSettings}
              >
                <SettingsIcon />
              </IconButton>
            )}
            {menuOpen ? (
              <Backdrop open={true}>
                <ClickAwayListener onClickAway={handleClickAwaySettings}>
                  <Box style={{ width: "min(85%, 800px)", height: "75%" }}>
                    <SettingsMenu />
                  </Box>
                </ClickAwayListener>
              </Backdrop>
            ) : null}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Tabs value={value} onChange={(e, v) => handleChange(e, v)}>
                <Tab label="Watch" onClick={getWatch} {...a11yProps(0)} />
                <Tab label="Fly" onClick={getFly} {...a11yProps(1)} />
                <Tab label="Learn" onClick={getLearn} {...a11yProps(2)} />
                <Tab label="Info" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <Box> </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ width: "100%" }}>
        <CustomTabPanel value={value} index={0}>
          <TimeSlider />
          <ZoomControls />
          <AsteroidWatch />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TimeSlider />
          <ZoomControls />
          <FlyTo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Learn />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Info />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default ControlsComponent;
