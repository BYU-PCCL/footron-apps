import { Box } from "@material-ui/core";
import { standardBottomUiStyle } from "./style";
import ZoomControls from "./zoom";
import TimeSlider from "./timeSlider";

export default function StandardBottomUi() {
  return (
    <Box css={standardBottomUiStyle}>
      <ZoomControls />
      <TimeSlider />
    </Box>
  );
}
