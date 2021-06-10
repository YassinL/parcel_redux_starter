import { isNil } from "lodash";
import styled from "styled-components";
import {
  flexbox,
  space,
  color,
  border,
  position,
  layout,
  backgroundSize,
  compose,
  boxShadow,
} from "styled-system";

import {
  cursor,
  pointerEvents,
  visibility,
  userSelect,
} from "./primitives/utilities";

export const Box = styled.div.attrs(
  ({
    width: boxWidth,
    height: boxHeight,
    fullWidth,
    fullHeight,
    ...otherProps
  }) => {
    const attrs = {};

    if (fullWidth && isNil(boxWidth)) {
      attrs.width = "100%";
    }

    if (fullHeight && isNil(boxHeight)) {
      attrs.height = "100%";
    }

    return { ...attrs, ...otherProps };
  }
);
compose(
  flexbox,
  space,
  color,
  border,
  position,
  layout,

  // Misc
  backgroundSize,
  boxShadow,

  // Custom
  cursor,
  pointerEvents,
  visibility,
  userSelect
);
