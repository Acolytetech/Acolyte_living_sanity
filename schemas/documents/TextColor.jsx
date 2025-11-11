/* eslint-disable react/prop-types */
import React from "react";

export const TextColor = (props) => {
  return (
    <span style={{ color: props?.value?.color || "inherit" }}>
      {props.children}
    </span>
  );
};
