/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useCallback, useState } from "react";
import { useMessaging } from "@footron/controls-client";
import {
  Box,
  Toolbar,
  Tab,
  Tabs,
  createTheme,
} from "@material-ui/core";

import {
  Backdrop,
} from "@mui/material"

import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import FlyTo from "./FlyTo";
import SettingsMenu from "./SettingsMenu";
import AsteroidWatch from "./AsteroidWatch";
import Learn from "./Learn";
import Info from "./Info";
import { bottomBarStyle, bottomTitleStyle, centerStyle, controlsContainerStyle, definitionHeaderStyle, dynamicUiwrapperStyle, fixedFooterStyle, footerInnerStyle, footerStyle, fullSizeStyle, headerStyle, overlayMenuStyle, overlayStyle, pageWidthStyle, pageWrapperStyle, settingsMenuWrapperStyle, standardTopUiStyle, titleStyle, toolbarStyle, wrapperStyle } from "./style";
import { BroadcastOnHome } from "@mui/icons-material";
import { Icon, Link } from "@mui/material";
import { AppsRounded, Close, Opacity } from "@material-ui/icons";
import { ThemeProvider } from "@emotion/react";
import StandardBottomUi from "./standardBottomUi";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      css={fullSizeStyle}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box css={fullSizeStyle}>{children}</Box>}
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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#001E4C",
        light: "#092b87",
        dark: "#011221",
      },
    },
  });

  // TODO: Remove footron container stuff

  return (
    <main css={pageWrapperStyle}>
      <div css={pageWidthStyle}>

        <div css={headerStyle}>
          <h1 css={titleStyle}>Eyes on Asteroids</h1>
          <Icon>
            <BroadcastOnHome />
          </Icon>
        </div>
        <div css={controlsContainerStyle}>
          <ThemeProvider theme={theme}>
            {/* Start normal controls */}
            <Box css={wrapperStyle}>
              <Box css={dynamicUiwrapperStyle}>
                <CustomTabPanel value={value} index={0} >
                  <Box css={fullSizeStyle}>
                    <AsteroidWatch />
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Box css={standardTopUiStyle}>
                    <FlyTo />
                  </Box>
                  <StandardBottomUi />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <Learn />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <Info />
                </CustomTabPanel>
              </Box>

              <Box css={bottomBarStyle}>
                <Toolbar
                  color="primary"
                  css={toolbarStyle}
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
                    <Backdrop open={true} css={overlayStyle}>
                      <ClickAwayListener onClickAway={handleClickAwaySettings}>
                        <Box css={overlayMenuStyle}>
                          <Box css={fullSizeStyle}>
                            <Box css={definitionHeaderStyle}>
                              <Box> </Box>
                              <h3>Settings</h3>
                              <IconButton onClick={() => setMenuOpen(false)}>
                                <Close />
                              </IconButton>
                            </Box>
                            <SettingsMenu />
                          </Box>
                        </Box>
                      </ClickAwayListener>
                    </Backdrop>
                  ) : null}
                  <Box css={centerStyle}>
                    <Tabs value={value} onChange={(e, v) => handleChange(e, v)}>
                      <Tab label="Watch" onClick={getWatch} {...a11yProps(0)} />
                      <Tab label="Fly" onClick={getFly} {...a11yProps(1)} />
                      <Tab label="Learn" onClick={getLearn} {...a11yProps(2)} />
                      <Tab label="Info" {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                  <Box> </Box>
                </Toolbar>
              </Box>
            </Box>
            {/* End normal controls */}
          </ThemeProvider>
        </div>
        <div css={fixedFooterStyle}>
          <Link style={{ textDecoration: "none" }}>
            <div css={footerStyle}>
              <div css={footerInnerStyle}>
                <AppsRounded fontSize="large" style={{ fill: "#f0f6ff" }} />
                <h1 css={bottomTitleStyle}>More Experiences</h1>
              </div>
            </div>
          </Link>
        </div>
      </div >
    </main >
  );
};

export default ControlsComponent;
