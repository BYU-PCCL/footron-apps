/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useCallback, useState } from "react";
import { useMessaging } from "@footron/controls-client";
import { Slider, Box, Button } from "@material-ui/core";

const containerStyle = css`
  padding: 16px;
  overflow-x: hidden;

  p {
    margin: 0 0 16px;
  }
`;
const stopSymbols = ["■", "▲", "●", "♥"];
const stopColors = ["#EE6352", "#08B2E3", "#57A773", "#8657a7", "#2222AA"];

const sectionWrapperStyle = {
  justifyContent: "center",
  padding: "2em 0 0 0",
  margin: "auto",
};

const buttonWrapperStyle = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(5, 17%)",
  gridTemplateRows: "repeat(4, 100%)",
  gap: "3%",
  alignItems: "center",
  justifyContent: "center",
  Height: "auto",
};

const buttonStyle = {
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: "100%",
  fontSize: "200%",
  alignItems: "center",
  justifyContent: "center",
};

const ControlsComponent = () => {
  const { sendMessage } = useMessaging();
  const [buttonCount, setButtonCount] = useState(3);

  const updateBusCount = useCallback(
    async (event, value) => {
      await sendMessage({ type: "numBuses", value: value });
    },
    [sendMessage]
  );

  const updateStopCount = useCallback(
    async (event, value) => {
      setButtonCount(value);
      await sendMessage({ type: "numStops", value: value });
    },
    [sendMessage]
  );

  const restart = useCallback(
    async (event, value) => {
      await sendMessage({ type: "restart", value: value });
    },
    [sendMessage]
  );

  const pauseStart = useCallback(
    async (value) => {
      console.log(value);
      await sendMessage({ type: "delayStop", value: value });
    },
    [sendMessage]
  );

  const pauseEnd = useCallback(
    async (value) => {
      console.log(value);
      await sendMessage({ type: "freeStop", value: value });
    },
    [sendMessage]
  );

  const busStopSymbol = (index) => {
    const stopStyle = {
      ...buttonStyle,
      color: stopColors[index % stopColors.length],
    };
    return (
      <span style={stopStyle}>{stopSymbols[index % stopSymbols.length]}</span>
    );
  };

  const buttons = Array.from({ length: buttonCount }, (_, index) => (
    <Button
      key={index}
      style={buttonStyle}
      variant="outlined"
      color="primary"
      onMouseDown={() => pauseStart(index)}
      onMouseUp={() => pauseEnd(index)}
      onTouchStart={() => pauseStart(index)}
      onTouchEnd={() => pauseEnd(index)}
    >
      {busStopSymbol(index)}
    </Button>
  ));

  return (
    <div css={containerStyle}>
      <h1>Bus Bunching</h1>
      <p>
        Learn more about bus bunching here:{' '}
        <a href="https://en.wikipedia.org/wiki/Bus_bunching">
          Wikipedia &quot;Bus Bunching&quot;
        </a>
      </p>
      <Box style={sectionWrapperStyle}>
        <p>
          <b>Change the number of buses!</b>
        </p>
        <Slider
          min={1}
          max={10}
          valueLabelDisplay="auto"
          onChange={updateBusCount}
          step={1}
          marks
          defaultValue={3}
        />
        <p>
          <b>Change the number of bus stops!</b>
        </p>
        <Slider
          min={2}
          max={20}
          valueLabelDisplay="auto"
          onChange={updateStopCount}
          step={1}
          marks
          defaultValue={5}
        />
      </Box>
      <Box style={sectionWrapperStyle}>
        <Box style={{ textAlign: "center" }}>
          <Button
            style={{ margin: "0 auto" }}
            variant="contained"
            color="primary"
            onClick={restart}
          >
            <b>Restart</b>
          </Button>
        </Box>
      </Box>
      <Box style={sectionWrapperStyle}>
        <p>
          <b>
            Create a delay by clicking and holding any of the bus stops below.
          </b>
        </p>
        <Box style={buttonWrapperStyle}>{buttons}</Box>
      </Box>
    </div>
  );
};

export default ControlsComponent;
