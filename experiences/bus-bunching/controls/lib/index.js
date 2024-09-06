/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { useCallback } from "react"
import { useMessaging } from "@footron/controls-client"
import { Slider } from "@material-ui/core"

const containerStyle = css`
  padding: 16px;
  overflow-x: hidden;

  p {
    margin: 0 0 16px;
  }
`

const ControlsComponent = () => {
  const { sendMessage } = useMessaging()

  const updateBusCount = useCallback(
    async (event, value) => {
      await sendMessage({ type: "busCount", value: value })
    },
    [sendMessage]
  )

  const updateStopCount = useCallback(
    async (event, value) => {
      await sendMessage({ type: "stopCount", value: value })
    },
    [sendMessage]
  )

  return (
    <div css={containerStyle}>
      <p>
        <b>Change the number of buses!</b>
      </p>
      <Slider
        min={1}
        max={10}
        onChange={updateBusCount}
        step={1}
        marks
        defaultValue={3}
      />
      <p>
        <b>Change the number of bus stops!</b>
      </p>
      <Slider
        min={1}
        max={20}
        onChange={updateStopCount}
        step={1}
        marks
        defaultValue={5}
      />
    </div>
  )
}

export default ControlsComponent
