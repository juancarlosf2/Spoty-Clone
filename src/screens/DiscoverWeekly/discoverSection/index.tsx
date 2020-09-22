import { makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { DiscoverWeekly } from "../../../api/types";
import "./styles.css";

interface Props {
  discoverWeekly: DiscoverWeekly | null;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5em",
  },
  title: {
    color: "#fff",
    fontFamily: "circular std black",
    fontSize: "6em",
    lineHeight: "0px",
    letterSpacing: "-0.03em",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginLeft: "20px",
  },
  description: {
    color: "#D4D4D4",
    fontFamily: "circular std book",
    fontSize: "1.1em",
    lineHeight: "0px",
  },
  subCaption: {
    color: "#D4D4D4",
    fontFamily: "circular std bold",
    fontSize: "12px",
    textTransform: "uppercase",
  },
  caption: {
    color: "#D4D4D4",
    fontFamily: "circular std book",
    fontSize: "15px",
    marginLeft: "10px",
  },
  captionContainer: {
    display: "flex",
    flexDirection: "row",
  },
  spotyCaption: {
    color: "#FFF",
    fontFamily: "circular std bold",
    fontSize: "15px",
  },
});

function DiscoverSection(props: Props): ReactElement {
  const { discoverWeekly } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className="img" src={discoverWeekly?.images[0].url} alt="" />
      <div className={classes.content}>
        <span className={classes.subCaption}>playlist</span>
        <h1 className={classes.title}>{discoverWeekly?.name}</h1>
        <p className={classes.description}>{discoverWeekly?.description}</p>
        <div className="captionContainer">
          <span className={classes.spotyCaption}>Spotify</span>
          <span className={classes.caption}>
            {discoverWeekly?.followers.total} likes
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
