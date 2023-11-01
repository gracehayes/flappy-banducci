import React, { useEffect, useState } from "react";
import TrolleyImage from "../assets/trolley.png";

const Trolley = ({ wallXCoords, wallYCoords, wallRefs }) => {
  const [yPos, setYPos] = useState(400);
  const [xPos, setXPos] = useState(200);
  const trolleyRef = React.useRef(null);

  const handleKeyUp = (event) => {
    if (event.keyCode === 32) {
      const timeout = setTimeout(() => {
        setYPos(yPos + 50);
      }, 20);

      return () => {
        clearTimeout(timeout);
      };
    }
  };
  if (trolleyRef.current) {
    const trolleyRect = trolleyRef.current.getBoundingClientRect();
    if (trolleyRect.bottom >= window.innerHeight) {
      window.alert("You lost!");
    }
    if (trolleyRect.top <= 0) {
      window.alert("You lost!");
    }
    wallRefs.forEach((wallRef) => {
      if (wallRef.current) {
        const wallRect = wallRef.current.getBoundingClientRect();
        if (
          trolleyRect.left >= wallRect.left &&
          trolleyRect.left <= wallRect.right
        ) {
          if (
            trolleyRect.bottom >= wallRect.top &&
            trolleyRect.bottom <= wallRect.bottom
          ) {
            window.alert("You lost!");
          }
          if (
            trolleyRect.top <= wallRect.bottom &&
            trolleyRect.top >= wallRect.top
          ) {
            window.alert("You lost!");
          }
        }
      }
    });
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setYPos((_yPos) => _yPos - 3);
      setXPos((_xPos) => _xPos + 5);
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [yPos, xPos]);

  window.addEventListener("keyup", handleKeyUp);

  return (
    <div
      className="trolley"
      ref={trolleyRef}
      style={{
        position: "absolute",
        left: `${xPos}px`,
        bottom: `${yPos}px`,
      }}
    >
      <img src={TrolleyImage} alt="trolley" width="40px" height="40px" />
    </div>
  );
};

export default Trolley;
