/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useCallback, useState } from "react";
import { useMessaging } from "@footron/controls-client";
import { FormControlLabel, Slider, Checkbox, FormGroup } from "@material-ui/core";

const containerStyle = css`
  padding: 16px;
  overflow-x: hidden;

  p {
    margin: 0 0 16px;
  }
`;

const ControlsComponent = () => {
  const [selection, setSelection] = useState([true, true, true, true]);

  const { sendMessage } = useMessaging();

  const updateSlices = useCallback(
    async (event, value) => {
      await sendMessage({ "type": "slices", "value": value });
    },
    [sendMessage]
  );

  const updateSpeed = useCallback(
    async (event, value) => {
      await sendMessage({ "type": "speed", "value": value });
    },
    [sendMessage]
  );

  const updateSelection = useCallback(
    async (index, event) => {
      let newSelection = [...selection]
      newSelection[index] = event.target.checked;
      if (!newSelection.some(x => x === true)) {
        return;
      }
      await sendMessage({ "type": "selection", "value": newSelection });
      console.log(newSelection)
      setSelection(newSelection)
    },
    [sendMessage, selection, setSelection]
  );

  return (
    <div css={containerStyle}>
      <p>
        <b>Change the number of slices!</b>
      </p>
      <Slider
        min={0}
        max={1}
        onChange={updateSlices}
        step={0.05}
        marks
        defaultValue={1}
      />
      <p>
        <b>Change the speed of the sorting!</b>
      </p>
      <Slider
        min={0}
        max={1}
        onChange={updateSpeed}
        step={0.05}
        marks
        defaultValue={0.5}
      />
      <FormGroup >
        <FormControlLabel control={<Checkbox onChange={(event) => updateSelection(0, event)} checked={selection[0]} />} label="Bubble Sort" />
        <FormControlLabel control={<Checkbox onChange={(event) => updateSelection(1, event)} checked={selection[1]} />} label="Insertion Sort" />
        <FormControlLabel control={<Checkbox onChange={(event) => updateSelection(2, event)} checked={selection[2]} />} label="Quick Sort" />
        <FormControlLabel control={<Checkbox onChange={(event) => updateSelection(3, event)} checked={selection[3]} />} label="Merge Sort" />
      </FormGroup>
    </div>
  );
};

export default ControlsComponent;
