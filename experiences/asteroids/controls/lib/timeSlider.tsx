import { Button, Slider, Box } from "@material-ui/core";
import { useMessaging } from "@footron/controls-client";
import { useState } from "react";
import { thickBottomWidgetStyle, thinBottomWidgetStyle } from "./style";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function formatTime(seconds: number): string {
  const units = [
    { label: "month", value: 60 * 60 * 24 * 30.5 },
    { label: "week", value: 60 * 60 * 24 * 7 },
    { label: "day", value: 60 * 60 * 24 },
    { label: "hour", value: 60 * 60 },
    { label: "minute", value: 60 },
  ];

  let timeStr = "", secondsRemaining = true;
  timeStr += seconds < 0 ? "-" : "";
  seconds = Math.abs(seconds);

  for (const unit of units) {
    const unitValue = Math.floor(seconds / unit.value);
    if (unitValue > 0) {
      timeStr += `${unitValue} ${unit.label}${unitValue > 1 ? "s" : ""} `;
      secondsRemaining = false;
      break;
    }
  }
  timeStr = timeStr.trim();
  timeStr += secondsRemaining ? Math.round(seconds * 10) / 10 + " seconds" : "";
  timeStr += " / second";
  return timeStr;
}

const sliderScale = 90 / 100;
const fiveDays = Math.log2(60 * 60 * 24 * 5 + 1) / sliderScale;
const live = Math.log2(2) / sliderScale;
const pause = 0;

function calculateValue(value: number) {
  return Math.sign(value) * (2 ** Math.abs(value * sliderScale) - 1);
}

export default function TimeSlider() {
  const [rate, setRate] = useState(fiveDays);
  const [oldRate, setOldRate] = useState(fiveDays);
  const { sendMessage } = useMessaging();

  const updateTime = (event: any, value: any) => {
    setRate(value);
    sendMessage({ type: "time", value: calculateValue(value) });
  };

  const goLive = async () => {
    setRate(live);
    sendMessage({ type: "time", value: "live" });
  };

  const play = async () => {
    setRate(oldRate);
    sendMessage({ type: "time", value: calculateValue(oldRate) });
  };

  const pauseTime = async () => {
    setOldRate(rate);
    setRate(0);
    sendMessage({ type: "time", value: pause });
  };

  return (
    <Box css={thickBottomWidgetStyle}>
      <Box css={thinBottomWidgetStyle}>
        <b>Change the speed of time</b>
        <Box>{formatTime(calculateValue(rate))}</Box>
      </Box>
      <Box css={thinBottomWidgetStyle}>
        <Slider
          aria-label="Restricted values"
          defaultValue={18.7}
          min={-25}
          max={25}
          value={rate}
          step={0.01}
          onChange={(e, v) => updateTime(e, v)}
        />
      </Box>
      <Box css={thinBottomWidgetStyle}>
        <Button onClick={goLive} variant="contained" color="primary" size="large">
          Live
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={rate == 0 ? play : pauseTime}
          size="large"
        >
          {rate == 0 ? <PlayArrowIcon /> : <PauseIcon />}
        </Button>
      </Box>
    </Box>
  );
}
