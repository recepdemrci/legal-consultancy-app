import React from "react";
import HomeContainer from "components/HomeContainer";
import Navbar from "components/Navbar/Navbar";
import TopContainer from "components/TopContainer";
import MiddleContainer from "components/MiddleContainer";
import BottomContainer from "./BottomContainer";
import ContactContainer from "./ContactContainer";

function App() {
  return (
    <>
      <HomeContainer />
      <Navbar />
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
      <ContactContainer />
    </>
  );
}

export default App;
