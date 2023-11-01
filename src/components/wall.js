import React from "react";
import CashImage from "./cash.png";

const Wall = React.forwardRef(
  ({ number, wallXCoords, wallYCoords, wallRefs }, ref) => {
    const getPosition = () => {
      return wallXCoords[number - 1];
    };

    const getHeight = () => {
      return wallYCoords[number - 1];
    };

    const style = {
      ...getPosition(),
      ...getHeight(),
      position: "absolute",
      width: "40px",
      // backgroundColor: "black",
      backgroundImage: `url("${CashImage}")`,
      backgroundSize: "40px 40px",
      backgroundPosition: "center",
    };

    // return <img alt="cash" src={CashImage} className="walll" style={style}></img>;
    return <div ref={ref} className="wall" style={style}></div>;
  }
);

export default Wall;
