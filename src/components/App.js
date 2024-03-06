// // App.js

// import React, { useState, useEffect } from "react";
// import "../styles/App.css";

// const App = () => {
//   const [renderBall, setRenderBall] = useState(false);
//   const [posi, setPosi] = useState(0);
//   const [ballPosition, setBallPosition] = useState({ left: "0px" });

//   const buttonClickHandler = () => {
//     setRenderBall(true);
//   };

//   const handleArrowRight = (event) => {
//     if (event.key === "ArrowRight") {
//       setPosi((prevPosi) => (prevPosi === 0 ? prevPosi  +'5px' : prevPosi));
//     }
//   };

//   useEffect(() => {
//     if (renderBall) {
//       setBallPosition({ left: `${posi}px` });
//     }
//   }, [posi, renderBall]);

//   useEffect(() => {
//     document.addEventListener("keydown", handleArrowRight);

//     return () => {
//       document.removeEventListener("keydown", handleArrowRight);
//     };
//   }, []);

//   const renderBallOrButton = () => {
//     if (renderBall) {
//       return <div className="ball" data-testid="ball" style={ballPosition}></div>;
//     } else {
//       return <button className="start" data-testid="start" onClick={buttonClickHandler}>Start</button>;
//     }
//   };

//   return <div className="playground">{renderBallOrButton()}</div>;
// };

// export default App;
import React, { Component } from "react";
import "../styles/App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleArrowRight = this.handleArrowRight.bind(this);
  }

  buttonClickHandler() {
    // Update the state to render the ball and hide the button
    this.setState({ renderBall: true });
  }

  handleArrowRight(event) {
    // Check if the right arrow key is pressed
    if (event.key === "ArrowRight") {
      // Move the ball to the right by 5 pixels
      this.setState((prevState) => {
        const newPosi = prevState.posi + 5;
        return {
          posi: newPosi,
          ballPosition: { left: `${newPosi}px` },
        };
      });
    }
  }

  componentDidMount() {
    // Add event listener for the right arrow key
    document.addEventListener("keydown", this.handleArrowRight);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
