import { useMessaging } from "@footron/controls-client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import { standardContainerStyle } from "./style";

export default function AsteroidWatch() {
  const { sendMessage } = useMessaging();

  const prev = async () => {
    sendMessage({ type: "watch", value: "previoius" });
  };

  const next = async () => {
    sendMessage({ type: "watch", value: "next" });
  };

  return (
    <div>
      <b>Select next close approach</b>
      <span style={standardContainerStyle}>
        <IconButton onClick={prev}>
          <ChevronLeftIcon sx={{ fontSize: 80 }} />
        </IconButton>
        <IconButton onClick={next}>
          <ChevronRightIcon sx={{ fontSize: 80 }} />
        </IconButton>
      </span>
    </div>
  );
}
