import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import {
  AsteroidIcon,
  CometIcon,
  ShadowLightingIcon,
  OrbitIcon,
  PlanetIcon,
  NaturalLightingIcon,
  FloodLightingIcon,
} from "./icons";
import {
  AutoAwesome,
  Label,
  Settings,
  Radar,
  SatelliteAlt,
} from "@mui/icons-material";

import { useMessaging } from "@footron/controls-client";

export default function SettingsMenu() {
  const { sendMessage } = useMessaging();
  const [state, setState] = useState({
    asteroids: false,
    comets: false,
    phos: false,
    planets: true,
    spacecraft: true,
    trails: true,
    labels: true,
    icons: true,
    starfield: false,
    userInterface: true,
  });
  const [lighting, setLighting] = useState("shadow");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    sendMessage({
      type: "settings",
      setting: event.target.name,
      value: event.target.checked,
    });
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleLightingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    sendMessage({
      type: "settings",
      setting: "lighting",
      value: event.target.name,
    });
    setLighting(event.target.name as string);
  };

  return (
    <List
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        color: "black",
        overflow: "auto",
      }}
    >
      <ListSubheader>Filters</ListSubheader>
      <ListItem>
        <ListItemIcon>
          <AsteroidIcon />
        </ListItemIcon>
        <ListItemText primary="asteroids" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="asteroids"
          checked={state.asteroids}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CometIcon />
        </ListItemIcon>
        <ListItemText primary="comets" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="comets"
          checked={state.comets}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Radar />
        </ListItemIcon>
        <ListItemText primary="phos" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="phos"
          checked={state.phos}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListSubheader>Lighting</ListSubheader>
      <ListItem>
        <ListItemIcon>
          <FloodLightingIcon />
        </ListItemIcon>
        <ListItemText primary="Flood" />
        <Switch
          edge="end"
          onChange={handleLightingChange}
          name="flood"
          checked={lighting == "flood"}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ShadowLightingIcon />
        </ListItemIcon>
        <ListItemText primary="Shadow" />
        <Switch
          edge="end"
          onChange={handleLightingChange}
          name="shadow"
          checked={lighting == "shadow"}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <NaturalLightingIcon />
        </ListItemIcon>
        <ListItemText primary="Natural" />
        <Switch
          edge="end"
          onChange={handleLightingChange}
          name="natural"
          checked={lighting == "natural"}
        />
      </ListItem>
      <ListSubheader>Layers</ListSubheader>
      <ListItem>
        <ListItemIcon>
          <PlanetIcon />
        </ListItemIcon>
        <ListItemText primary="Planets" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="planets"
          checked={state.planets}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <SatelliteAlt />
        </ListItemIcon>
        <ListItemText primary="spacecraft" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="spacecraft"
          checked={state.spacecraft}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <OrbitIcon />
        </ListItemIcon>
        <ListItemText primary="trails" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="trails"
          checked={state.trails}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Label />
        </ListItemIcon>
        <ListItemText primary="labels" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="labels"
          checked={state.labels}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AsteroidIcon />
        </ListItemIcon>
        <ListItemText primary="icons" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="icons"
          checked={state.icons}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AutoAwesome />
        </ListItemIcon>
        <ListItemText primary="starfield" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="starfield"
          checked={state.starfield}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="userInterface" />
        <Switch
          edge="end"
          onChange={handleChange}
          name="userInterface"
          checked={state.userInterface}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
    </List>
  );
}
