import { Text, Tooltip } from "@chakra-ui/react";
import React from "react";

const Source = (props) => {
  return (
    <Tooltip label={props.source} placement="right-start" bg="moonstone.500">
      <span
        style={{
          color: "inherit",
          verticalAlign: "super",
          fontSize: "smaller",
        }}
      >
        {" "}
        {props.symbol}
      </span>
    </Tooltip>
  );
};

export default Source;
