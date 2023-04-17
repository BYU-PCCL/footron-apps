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

  const updatePendulumCount = useCallback(
    async (event, value) => {
      await sendMessage({ type: "count", value: value })
    },
    [sendMessage]
  )

  const updateGravity = useCallback(
    async (event, value) => {
      await sendMessage({ type: "g", value: value })
    },
    [sendMessage]
  )

  return (
    <div css={containerStyle}>
      <p>
        <b>Change the number of pendulums!</b>
      </p>
      <Slider
        min={0}
        max={1}
        onChange={updatePendulumCount}
        step={0.05}
        marks
        defaultValue={0.45} // 10,000 pendulums
      />
      <p>
        <b>Change the value of gravity!</b>
      </p>
      <Slider
        min={0}
        max={1}
        onChange={updateGravity}
        step={0.05}
        marks
        defaultValue={0.5} // 9.81
      />
    </div>
  )
}

export default ControlsComponent
