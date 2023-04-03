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

  const updateCellCount = useCallback(
    async (event, value) => {
      await sendMessage({ type: "cells", value: value })
    },
    [sendMessage]
  )

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
    </div>
  )
}

export default ControlsComponent
