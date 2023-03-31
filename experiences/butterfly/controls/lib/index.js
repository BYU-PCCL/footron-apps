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
        defaultValue={1}
      />
    </div>
  )
}

export default ControlsComponent
