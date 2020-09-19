import React, { ReactElement } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "material-ui-core/OverridableComponent";
import "./styles.css";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | undefined;
  option: string;
}

function SidebarOption(props: Props): ReactElement {
  const { Icon, option } = props;
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="icon" />}
      <h4 className={Icon ? "mainOption" : "secondaryOption"}>{option}</h4>
    </div>
  );
}

export default SidebarOption;
