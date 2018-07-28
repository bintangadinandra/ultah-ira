import React, { Component } from "react";
import "./App.css";
import FullPageWrapper from "./components/FullpageWrapper";
import {
  NakedBrown,
  DarkSea,
  SkyBlue,
  White,
  Black,
  PinkyBoy,
  Toska
} from "./utils/Colors";
import BirthdayCake from "./components/BirthdayCake";
import Clouds from "./components/Clouds";
import FlowerPot from "./components/FlowerPot";

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
          <div style={{ marginBottom: "1rem" }}>
            <FlowerPot />
          </div>
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
          <div style={{ padding: "1rem", marginBottom: "2rem" }}>
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
            color: White,
            position: "relative"
          }}
          justifyContent="center"
          alignItems="center"
        >
          <div
            style={{
              position: "absolute",
              height: "50%",
              pointerEvents: "none"
            }}
          >
            <Clouds scale="0.6" duration="10" />
            <Clouds scale="0.3" duration="20" />
            <Clouds scale="0.2" duration="25" />
            <Clouds scale="0.4" duration="15" />
          </div>
          <div
            style={{
              textAlign: "left",
              padding: "1rem",
              background: White,
              color: Black,
              border: `.25rem dashed ${NakedBrown}`,
              boxShadow: "0 0 0px 5px white",
              borderRadius: "1rem",
              outline: ".25rem white",
              zIndex: 5,
              position: "relative"
            }}
          >
            <h3>I wish..</h3>
            <p>You keep living your life to the fullest</p>
            <p>You keep being a good daughter for your parents</p>
            <p>You are always on your track to reach your goal...</p>
            <p>And to reach our goal, forever and always with me,</p>
            <p>Reaching towards the sky high...</p>
          </div>
        </FullPageWrapper>
        <FullPageWrapper
          style={{ background: `linear-gradient(${SkyBlue}, ${White})` }}
          justifyContent="flex-end"
          notPadded
        >
          <div
            style={{
              width: "100%",
              height: "10rem",
              background: Toska
            }}
          />
        </FullPageWrapper>
      </div>
    );
  }
}

export default App;
