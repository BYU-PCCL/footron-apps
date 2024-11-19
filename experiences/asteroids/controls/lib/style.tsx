import { css } from "@emotion/react";

export const standardContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  align-items: center;
  // width: min(100%, 600px);
  // padding: 1em 0em;
`

export const bottomUiContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  align-items: center;
  // width: min(100%, 600px);
  // padding: 1em 0em;
  height: 50%;
`

export const paginationStyle = css`
  margin-top: 2;
  display: flex;
  justify-content: center;
  z-index: 888;
  top: auto;
  bottom: 0;
`

export const overlayMenuStyle = css`
  width: min(85vw, 800px);
  max-height: 75vh;
  background-color: white;
  overflow: auto;
  padding: 2em;
  opacity: 1;
  z-index: 99999;
`

export const halfWidthStyle = css`
  width: 50%;
`

export const largeIconStyle = css`
  font-size = 80px;
`

export const fullSizeStyle = css`
  width: 100%;
  height: 100%;
`

export const appBarStyle = css`
  top: auto;
  bottom: 64px;
`

export const toolbarStyle = css`
  display: flex;
  justify-content: space-between;
  overflow: auto;
`

export const centerStyle = css`
  justify-content: center;
  gaps: 0.5em;
`

export const settingsMenuWrapperStyle = css`
  width: min(85%, 800px);
  height: 75%;
`

export const storyBoxStyle = css`
  border: solid;
  border-radius: 5px;
  padding: 1em;
  margin: 0 0 .5em 0;
`

export const overlayStyle = css`
  z-index: 99999;
`

export const halfScreenStyle = css`
  max-height: 50vh;
  overflow: auto;
`

export const overflowContentStyle = css`
  max-height: 100%;
  overflow: auto;
`

export const definitionHeaderStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const settingsMenuStyle = css`
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  overflow: auto;
  opacity: 75%;
`



export const topUiStyle = css`
  width: 100%;
  overflow: auto;
  height: 50%;
  min-height: 50%
`

export const standardTopUiStyle = css`
  width: 100%;
  overflow: auto;
  height: calc(100% - 256px);
  min-height: calc(100% - 256px);
`

export const smallTopUiStyle = css`
  width: 100%;
  overflow: auto;
  height: calc(100% - 320px);
  min-height: calc(100% - 320px);
`

export const largeTopUiStyle = css`
  width: 100%;
  overflow: auto;
  height: calc(100% - 64px);
  min-height: calc(100% - 64px);
`

export const bottomUiStyle = css`
  height: 50%;
  max-height: 50%;
`

export const thinBottomWidgetStyle = css`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  align-items: center;
  height: 64px;
  padding: 0px;
`

export const thickBottomWidgetStyle = css`
  justify-content: center;
  gap: 0.5em;
  align-items: center;
  height: 192px;
  padding: 0px;
`

export const standardBottomUiStyle = css`
  height: 256px;
  height: 256;
  max-height: 256;
`

export const largeBottomUiStyle = css`
  height: 320;
  max-height: 320;
`

export const wrapperStyle = css`
  height: calc(100vh - 128px);
  max-height: calc(100vh - 128px);
`

export const dynamicUiwrapperStyle = css`
  height: calc(100vh - 192px);
  max-height: calc(100vh - 192px);
  padding: 0 1em;
`

export const bottomBarStyle = css`
  height: 64;
  min-height: 64px;
`

export const fabStyle = css`
  float: right;
`

export const pageWrapperStyle = css`
  display: flex;
  justify-content: center;
  height: 100%;
`

export const pageWidthStyle = css`
  width: 100%;
  height: 100%;

  @media (min-width: 600px) {
    width: 600px;
  }
`

export const fixedFooterStyle = css`
  position: fixed;
  bottom: 0;

  @media (max-width: 600px) {
    left: 0;
    right: 0;
  }

  @media (min-width: 600px) {
    width: 600px;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: rgba(0, 30, 76, 0.25) 0 5px 5px;
  }
`

export const headerStyle = css`
  height: 64px;
  width: calc(100% - 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: #f7faff;
  border-bottom: 2px solid #b4bfd2;
  gap: 12px;
`

export const titleStyle = css`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #001e4c;
`

export const controlsContainerStyle = css`
  // Height of more experiences button
  margin-bottom: 64px;
`

export const footerStyle = css`
  height: 64px;
  width: calc(100% - 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  transition: background 100ms ease-out;
  background: #001e4c;

  &:hover {
    background: #072b6a;
  }

  &:active {
    background: #0b3379;
  }
`

export const footerInnerStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const bottomTitleStyle = css`
  font-family: "Source Code Pro", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f0f6ff;
`
