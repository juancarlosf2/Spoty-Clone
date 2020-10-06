import React, { ReactElement } from "react";
import "./styles.css";

interface Props {
  track: SpotifyApi.TrackObjectFull;
  index: number;
}

function SongRow(props: Props): ReactElement {
  const { track, index } = props;
  const { album, name, artists, duration_ms } = track;
  const millisToMinutesAndSeconds = (millis: number) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const duration_min = millisToMinutesAndSeconds(duration_ms);
  const authors = artists.map((artist) => artist.name).join(", ");

  return (
    <div className="contenedor">
      <div className="labels">
        <div className="izquierda">
          <span className="index">{index}</span>
          <img className="image" src={album.images[0].url} alt="" />
          <div className="infoContainer">
            <h4 className="title">{name}</h4>
            <caption className="author">{authors}</caption>
          </div>
        </div>
        <div className="centro">
          <h6 className="album">{album.name}</h6>
        </div>
        <div className="derecha">
          <h6 className="album">{duration_min}</h6>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
