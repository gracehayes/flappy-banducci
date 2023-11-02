import React from "react";
import Trolley from "./trolley";
import Wall from "./wall";

const Map = () => {
  const wall1Ref = React.useRef(null);
  const wall2Ref = React.useRef(null);
  const wall3Ref = React.useRef(null);
  const wall4Ref = React.useRef(null);
  const wall5Ref = React.useRef(null);
  const wall6Ref = React.useRef(null);
  const wall7Ref = React.useRef(null);
  const wall8Ref = React.useRef(null);

  const allRefs = [
    wall1Ref,
    wall2Ref,
    wall3Ref,
    wall4Ref,
    wall5Ref,
    wall6Ref,
    wall7Ref,
    wall8Ref,
  ];

  const xCoords = [
    { left: "400px", bottom: "0px" },
    { left: "700px", bottom: "0px" },
    { left: "1000px", bottom: "0px" },
    { left: "1300px", bottom: "0px" },
    { left: "400px", top: "0px" },
    { left: "700px", top: "0px" },
    { left: "1000px", top: "0px" },
    { left: "1300px", top: "0px" },
  ];

  const yCoords = [
    { height: "250px" },
    { height: "350px" },
    { height: "300px" },
    { height: "200px" },
    { height: "300px" },
    { height: "150px" },
    { height: "300px" },
    { height: "400px" },
  ];

  return (
    <div className="map" style={{ flexDirection: "column" }}>
      <Trolley wallCoords={xCoords} wallYCoords={yCoords} wallRefs={allRefs} />
      <Wall
        ref={wall1Ref}
        number={1}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
      <Wall
        ref={wall2Ref}
        number={2}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
      <Wall
        ref={wall3Ref}
        number={3}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
      <Wall
        ref={wall4Ref}
        number={4}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
      <Wall
        ref={wall5Ref}
        number={5}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
      <Wall
        ref={wall6Ref}
        number={6}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
      <Wall
        ref={wall7Ref}
        number={7}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
      <Wall
        ref={wall8Ref}
        number={8}
        wallXCoords={xCoords}
        wallYCoords={yCoords}
      />
    </div>
  );
};

export default Map;
