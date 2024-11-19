import { useMessaging } from "@footron/controls-client";
import { Box, Button } from "@mui/material";
import { fullSizeStyle, largeBottomUiStyle, smallTopUiStyle, thinBottomWidgetStyle } from "./style";
import ZoomControls from "./zoom";
import TimeSlider from "./timeSlider";

export default function AsteroidWatch() {
  const { sendMessage } = useMessaging();

  const prev = async () => {
    sendMessage({ type: "watch", value: "previous" });
  };

  const next = async () => {
    sendMessage({ type: "watch", value: "next" });
  };

  return (
    <div css={fullSizeStyle}>
      <Box css={smallTopUiStyle}>
        <h3>Select next close approach</h3>
      </Box>
      <Box css={largeBottomUiStyle}>
        <Box css={thinBottomWidgetStyle}>
          <Button color="primary" variant="contained" size="large" onClick={prev}>
            <strong>{"<"}</strong>
          </Button>
          <Button color="primary" variant="contained" size="large" onClick={next}>
            <strong>{">"}</strong>
          </Button>
        </Box>
        <ZoomControls />
        <TimeSlider />
      </Box>
    </div>
  );
}
