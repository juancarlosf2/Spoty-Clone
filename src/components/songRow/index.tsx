import React, { ReactElement } from "react";
import "./styles.css";

interface Props {
  track: SpotifyApi.TrackObjectFull;
  index: number;
}

function SongRow(props: Props): ReactElement {
  const { track, index } = props;
  const { album, name, artists, duration_ms } = track;
  return (
    <div className="contenedor">
      <div className="labels">
        <div className="izquierda">
          <span className="index">{index}</span>
          <img className="imagen" src={album.images[0].url} alt="" />
          <div className="infoContainer">
            <h4 className="title">{name}</h4>
            <caption className="author">{artists[0].name}</caption>
          </div>
        </div>
        <div className="centro">
          <h6 className="info">{album.name}</h6>
        </div>
        <div className="right">
          <h6 className="info">{duration_ms}</h6>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
