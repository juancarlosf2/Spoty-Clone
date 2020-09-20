import React, { ReactElement } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "material-ui-core/OverridableComponent";
import "./styles.css";

interface Props {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  option: string;
}

function SidebarOption(props: Props): ReactElement {
  const { Icon, option } = props;
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="icon" />}
      <span className={Icon ? "navLink" : "playlistLinks"}>{option}</span>
    </div>
  );
}

export default SidebarOption;
