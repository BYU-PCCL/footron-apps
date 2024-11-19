import React, { useCallback, useState } from "react";
import {
  ClickAwayListener,
  Backdrop,
  IconButton,
} from "@mui/material";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
} from "@material-ui/core"
import { useMessaging } from "@footron/controls-client";
import { flyTargets } from "./flytargets";
import { definitionHeaderStyle, overlayMenuStyle, fullSizeStyle, halfWidthStyle, overlayStyle, standardContainerStyle, thinBottomWidgetStyle } from "./style";
import { Close } from "@material-ui/icons";

interface DefinitionOverlayProps {
  definition: string;
}

export default function FlyTo() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTarget, setSelectedTarget] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoText, setInfoText] = useState<string>("");
  const [infoTitle, setInfoTitle] = useState<string>("");
  const { sendMessage } = useMessaging((message: any) => {
    console.log("Incoming info: ", message);
    if (message.title != null && message.content != null) {
      setInfoText(message.content);
      setInfoTitle(message.title);
    }
  });

  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const category = event.target.value as string;
    setSelectedCategory(category);
    setSelectedTarget(flyTargets[category][0]);
    setInfoText("");
    setInfoTitle("");
    console.log("Reset");
  };
  const handleTargetChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTarget(event.target.value as string);
    setInfoText("");
    setInfoTitle("");
  };

  const getInfoText = useCallback(
    async (target) => {
      await sendMessage({ type: "fly", value: target });
    },
    [sendMessage]
  );

  const handleClickAwaySettings = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setMenuOpen(false);
  };

  const DefinitionOverlay: React.FC<DefinitionOverlayProps> = ({
    definition,
  }) => {
    return (
      <Box css={overlayMenuStyle}>
        <Box css={definitionHeaderStyle}>
          <Box> </Box>
          <h3>{infoTitle}</h3>
          <IconButton onClick={() => {
            setMenuOpen(false);
            setInfoText("");
            setInfoTitle("");
            console.log(infoText, infoTitle)
            }}>
            <Close />
          </IconButton>
        </Box>
        <Box dangerouslySetInnerHTML={{ __html: infoText }} ></Box>
      </Box>
    );
  };

  return (
    <Box css={fullSizeStyle}>
      {menuOpen ? (
        <Backdrop open={true} css={overlayStyle}>
          <ClickAwayListener onClickAway={handleClickAwaySettings}>
            <Box css={overlayMenuStyle}>
              <DefinitionOverlay definition={infoText} />
            </Box>
          </ClickAwayListener>
        </Backdrop>
      ) : null}
      <h3>Fly to somewhere in space</h3>
      <Box p={1} css={standardContainerStyle}>
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
      <Box p={1} css={standardContainerStyle}>
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
      <Box css={thinBottomWidgetStyle}>
        {selectedTarget ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => getInfoText(selectedTarget)}
            css={halfWidthStyle}
          >
            Fly to Target
          </Button>
        ) : (
          null
        )}
      </Box>
      {(infoText != "") && <Box css={thinBottomWidgetStyle}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setMenuOpen(true)}
          css={halfWidthStyle}>
          About
        </Button>
      </Box>}
    </Box>
  );
}
