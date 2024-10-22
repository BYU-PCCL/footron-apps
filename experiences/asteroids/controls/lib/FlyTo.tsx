import React, { useCallback, useState } from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Button,
} from "@material-ui/core";
import { useMessaging } from "@footron/controls-client";
import { flyTargets } from "./flytargets";
import { standardContainerStyle } from "./style";

export default function FlyTo() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTarget, setSelectedTarget] = useState<string>("");
  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const category = event.target.value as string;
    setSelectedCategory(category);
    setSelectedTarget(flyTargets[category][0]); // Reset model when make changes
  };
  const handleTargetChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTarget(event.target.value as string);
  };
  const [infoText, setText] = useState<string>("");

  const { sendMessage } = useMessaging<string>((message) => setText(message));

  const getInfoText = useCallback(
    async (target) => {
      await sendMessage({ type: "fly", value: target });
    },
    [sendMessage]
  );

  return (
    <Box style={{ justifyContent: "center" }}>
      <b>Fly to somewhere in space</b>
      <Box p={2} style={standardContainerStyle}>
        <FormControl fullWidth>
          <InputLabel id="make-label">Select Category</InputLabel>
          <Select value={selectedCategory} onChange={handleCategoryChange}>
            {Object.keys(flyTargets).map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box p={2} style={standardContainerStyle}>
        <FormControl fullWidth disabled={!selectedCategory}>
          <InputLabel>Select Destination</InputLabel>
          <Select
            labelId="model-label"
            value={selectedTarget}
            onChange={handleTargetChange}
          >
            {selectedCategory &&
              flyTargets[selectedCategory].map((target) => (
                <MenuItem key={target} value={target}>
                  {target}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        style={standardContainerStyle}
      >
        {selectedTarget ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => getInfoText(selectedTarget)}
            style={{ width: "50%" }}
          >
            Fly to Target
          </Button>
        ) : (
          "Select a destination to fly to"
        )}
      </Box>
      <Box>
        {infoText}
      </Box>
    </Box>
  );
}
