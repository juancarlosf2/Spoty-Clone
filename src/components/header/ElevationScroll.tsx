import React, { ReactElement } from "react";
import { useScrollTrigger } from "@material-ui/core";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props): ReactElement {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: "red",
  });
}

export default ElevationScroll;
