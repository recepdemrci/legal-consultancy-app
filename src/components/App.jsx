import React from "react";
import HomeContainer from "components/HomeContainer";
import Navbar from "components/Navbar/Navbar";
import TopContainer from "components/TopContainer";
import MiddleContainer from "components/MiddleContainer";
import BottomContainer from "./BottomContainer";

function App() {
  return (
    <>
      <HomeContainer />
      <Navbar />
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </>
  );
}

export default App;
