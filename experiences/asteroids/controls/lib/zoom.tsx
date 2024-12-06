import { Box } from "@material-ui/core";
import { useMessaging } from "@footron/controls-client";
import { thinBottomWidgetStyle } from "./style";
import { Button } from "@mui/material";

export default function ZoomControls() {
  const { sendMessage } = useMessaging();

  const handleZoomIn = () => {
    sendMessage({ type: "zoom", value: "in" })
  }

  const handleZoomOut = () => {
    sendMessage({ type: "zoom", value: "out" })
  }

  return (
    <Box css={thinBottomWidgetStyle}>
      <Button color="primary" variant="contained" size="large" onClick={handleZoomOut}>
        <strong>{"-"}</strong>
      </Button>
      <Button color="primary" variant="contained" size="large" onClick={handleZoomIn}>
        <strong>{"+"}</strong>
      </Button>
    </Box>
  );
}
