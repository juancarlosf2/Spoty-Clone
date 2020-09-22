import React, { ReactElement } from "react";
import "./styles.css";

interface Props {
  img: string | undefined;
  index: number | undefined;
  title: string | undefined;
  author: string | undefined;
  album: string | undefined;
  timeDuration: string | undefined;
}

function SongRow(props: Props): ReactElement {
  const { img, index, title, author, album, timeDuration } = props;
  return (
    <div className="contenedor">
      <div className="labels">
        <div className="left">
          <span className="index">{index}</span>
          <img src={img} alt="" />
          <div className="infoContainer">
            <h4 className="title">{title}</h4>
            <caption className="author">{author}</caption>
          </div>
        </div>
        <div className="center">
          <h6 className="info">{album}</h6>
        </div>
        <div className="right">
          <h6 className="info">{timeDuration}</h6>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
