/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { useCallback, useState } from "react"
import { useMessaging } from "@footron/controls-client"
import {
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core"

const containerStyle = css`
  padding: 16px;
  overflow-x: hidden;

  p {
    margin: 0 0 16px;
  }
`

const ControlsComponent = () => {
  const { sendMessage } = useMessaging()

  const updateCellCount = useCallback(
    async (event, value) => {
      await sendMessage({ type: "cells", value: value })
    },
    [sendMessage]
  )

  const updateSpeed = useCallback(
    async (event, value) => {
      await sendMessage({ type: "speed", value: value })
    },
    [sendMessage]
  )

  const updateMazeFocus = useCallback(
    async (event, value) => {
      await sendMessage({ type: "focusMaze", value: value })
      setMazeFocus(value)
    },
    [sendMessage]
  )

  const [mazeFocus, setMazeFocus] = useState(false)

  return (
    <div css={containerStyle}>
      <p>
        <b>Change the number of cells!</b>
      </p>
      <Slider
        min={0}
        max={1}
        onChange={updateCellCount}
        step={0.05}
        marks
        defaultValue={0.45} // 21 cells
      />
      <p>
        <b>Change the speed!</b>
      </p>
      <Slider
        min={0}
        max={1}
        onChange={updateSpeed}
        step={0.5}
        marks
        defaultValue={0.5} // normal speed
      />
      <p>
        <b>Focus on one specific maze</b>
      </p>
      <FormControl component="fieldset">
        <RadioGroup
          name="focus-maze"
          value={mazeFocus}
          onChange={updateMazeFocus} // call messaging, then update with useState
        >
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="Show multiple mazes"
          />
          <FormControlLabel
            value="backtracker"
            control={<Radio />}
            label="Recursive Backtracker"
          />
          <FormControlLabel
            value="traversal"
            control={<Radio />}
            label="Random Traversal"
          />
          <FormControlLabel
            value="prim"
            control={<Radio />}
            label="Prim's Algorithm"
          />
          <FormControlLabel
            value="wilson"
            control={<Radio />}
            label="Wilson's Algorithm"
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default ControlsComponent
