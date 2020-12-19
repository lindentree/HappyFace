import React from "react";
import LandingPage from "./components/LandingPage";
import plantImage from "./plantImage.jpg";

function App() {
  return (
    <div className="App">
      <LandingPage
        background={plantImage}
        title="Welcome to HappyFace"
        subtitle="Something about HappyFace here."
      />
    </div>
  );
}

export default App;
