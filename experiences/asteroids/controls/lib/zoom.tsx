import { Box, IconButton } from "@material-ui/core";
import { useMessaging } from "@footron/controls-client";
import { ZoomIn, ZoomOut } from "@material-ui/icons";
import { standardContainerStyle } from "./style";

export default function ZoomControls() {
  const { sendMessage } = useMessaging();

  const handleZoomIn = () => {
    sendMessage({type: "zoom", value: "in"})
  }

  const handleZoomOut = () => {
    sendMessage({type: "zoom", value: "out"})
  }

  return (
    <Box style={{ justifyContent: "center" }}>
        <b>Zoom</b>
      <Box p={2} style={standardContainerStyle}>
        <IconButton onClick={handleZoomOut}>
          <ZoomOut style={{ fontSize: "50px" }} />
        </IconButton>
        <IconButton onClick={handleZoomIn}>
          <ZoomIn style={{ fontSize: "50px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
