import { system } from "styled-system";

export const cursor = system({
  cursor: true,
});

export const visibility = system({
  visibility: true,
});

export const pointerEvents = system({
  pointerEvents: true,
});

export const ellipsis = ({ ellipsis: addEllipsis }) =>
  addEllipsis &&
  `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

export const textDecoration = system({
  textDecoration: true,
});

export const whiteSpace = system({
  whiteSpace: true,
});

export const wordBreak = system({
  wordBreak: true,
});

export const textOverflow = system({
  textOverflow: true,
});

export const textTransform = system({
  textTransform: true,
});

export const userSelect = system({
  userSelect: true,
});
