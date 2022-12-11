import React from "react";
import HomeContainer from "components/HomeContainer";
import Navbar from "components/Navbar/Navbar";
import TopContainer from "components/TopContainer";
import MiddleContainer from "components/MiddleContainer";

function App() {
  return (
    <div>
      <HomeContainer />
      <Navbar />
      <TopContainer />
      <MiddleContainer />
    </div>
  );
}

export default App;
