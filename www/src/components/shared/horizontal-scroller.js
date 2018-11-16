import styled from "react-emotion"

import { rhythm } from "../../utils/typography"
import presets from "../../utils/presets"

const BOX_SHADOW_BLUR = `8px`

export const HorizontalScroller = styled(`div`)`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`

export const HorizontalScrollerContent = styled(`div`)`
  display: inline-flex;
  padding: ${BOX_SHADOW_BLUR} ${rhythm(presets.gutters.default / 2)}
    calc(${BOX_SHADOW_BLUR} * 1.5);
`

export const HorizontalScrollerItem = styled(`article`)`
  background: #fff;
  border-radius: ${presets.radiusLg}px;
  box-shadow: 0 0 ${BOX_SHADOW_BLUR} rgba(0, 0, 0, 0.2);
  margin-right: ${rhythm(presets.gutters.default / 2)};
  width: 77vw;

  :last-child {
    margin-right: 0;
  }
`
