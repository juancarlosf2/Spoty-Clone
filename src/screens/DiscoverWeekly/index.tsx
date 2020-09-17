import React, { ReactElement } from "react";
import { Spotify } from "../../api/types";

interface Props {
  spotify: Spotify;
}

export default function DiscoverWeekly({ spotify }: Props): ReactElement {
  return (
    <div>
      <p>hey</p>
    </div>
  );
}
