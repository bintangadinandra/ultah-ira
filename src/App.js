import React, { Component } from "react";
import "./App.css";
import FullPageWrapper from "./components/FullpageWrapper";
import {
  NakedBrown,
  DarkSea,
  SkyBlue,
  White,
  Black,
  PinkyBoy
} from "./utils/Colors";
import BirthdayCake from "./components/BirthdayCake";
import Clouds from "./components/Clouds";

class App extends Component {
  render() {
    return (
      <div>
        <FullPageWrapper
          style={{
            background: `linear-gradient(${DarkSea}, ${NakedBrown})`,
            color: "white"
          }}
          justifyContent="center"
          alignItems="center"
        >
          <h1>Hi There Beautiful!</h1>
          <p>If you're reading this, perhaps you've recieved my flowers :)</p>
        </FullPageWrapper>
        <FullPageWrapper
          style={{
            background: NakedBrown,
            color: Black,
            position: "relative"
          }}
          justifyContent="center"
          alignItems="center"
          notPadded
        >
          <div style={{ padding: "1rem" }}>
            <h3>First of all...</h3>
            <h1>I am sorry I cannot be there</h1>
            <h3>Be present at your special day</h3>
            <h3>But that won't stop me saying...</h3>
          </div>
          <div
            style={{
              background: PinkyBoy,
              boxShadow: "0 -13px 25px rgba(0,0,0,0.12)",
              height: "10rem",
              width: "100%",
              transform: "skewy(-10deg) translateY(50%)",
              alignSelf: "flex-end",
              position: "absolute",
              bottom: "0px",
              borderTop: ".5rem dashed rgba(0,0,0,.1)"
            }}
          />
        </FullPageWrapper>
        <FullPageWrapper
          style={{ background: PinkyBoy, color: White }}
          justifyContent="center"
          alignItems="center"
        >
          <div class="cake-candle-light">
            <BirthdayCake />
          </div>
          <p>Happy..!</p>
          <div
            style={{
              display: "flex"
            }}
          >
            <h1 class="giant">26</h1>
            <p style={{ marginTop: "4rem" }}>th</p>
          </div>
          <h1>Birthday!</h1>
        </FullPageWrapper>
        <FullPageWrapper
          style={{
            background: `linear-gradient(${PinkyBoy}, ${SkyBlue})`,
            color: White
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Clouds />
          <div style={{ textAlign: "left" }}>
            <h3>I wish..</h3>
            <p>You keep living your life to the fullest</p>
            <p>You keep being a good daughter for your parents</p>
            <p>You are always on your track to reach your goal...</p>
            <p>And to reach our goal, forever and always with me,</p>
            <p>Reaching towards the sky high...</p>
          </div>
        </FullPageWrapper>
      </div>
    );
  }
}

export default App;
