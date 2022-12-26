import React from "react";
import "./App.css";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import Fullname from "./Components/Profile/Fullname";
import Adresse from "./Components/Profile/Adresse";

const App = () => {
  return (
    <div className="app">
      <ProfilePhoto />
      <p>
        <Fullname />
        <Adresse />
      </p>
    </div>
  );
};

export default App;