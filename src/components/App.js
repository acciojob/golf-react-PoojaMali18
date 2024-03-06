// App.js

import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: "0px" });

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const handleArrowRight = (event) => {
    if (event.key === "ArrowRight") {
      setPosi((prevPosi) => prevPosi + 5);
    }
  };

  useEffect(() => {
    if (renderBall) {
      setBallPosition({ left: `${posi}px` });
    }
  }, [posi, renderBall]);

  useEffect(() => {
    document.addEventListener("keydown", handleArrowRight);

    return () => {
      document.removeEventListener("keydown", handleArrowRight);
    };
  }, []);

  const renderBallOrButton = () => {
    if (renderBall) {
      return <div className="ball" data-testid="ball" style={ballPosition}></div>;
    } else {
      return <button className="start" data-testid="start" onClick={buttonClickHandler}>Start</button>;
    }
  };

  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;
