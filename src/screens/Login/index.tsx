import React, { ReactElement } from "react";
import { images } from "../../components/images";
import { accessUrl } from "../../api/spotify";
import "./style.css";

function Login(): ReactElement {
  return (
    <div className="login">
      <img src={images.spotifyLogo} alt="" />
      <a href={accessUrl}>login to spotify</a>
    </div>
  );
}

export default Login;
