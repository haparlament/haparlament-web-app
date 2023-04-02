import React, { useState } from "react";
import PresetFeed from "./components/presetFeed/PresetFeed";
import OptionalPartner from "./components/presetFeed/OptionalPartner";
import WaitingForPairing from "./waitingForPairing/WaitingForPairing";
import BeforeStart from "./components/presetFeed/BeforeStart";
import { letsTalk, whatDoYouThink } from "./styles.css/icons.svg/icons";
// import { letsTalk, whatDoYouThink } from "../../styles.css/icons.svg/icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css/App.css";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import ChooseTime from "./components/ChooseTime";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  // const user = null;\
  const initJsonObject = {
    ImageID: "",
    Feeling: "",
    UserName: "",
    PhoneNumber: "",
    Day: "",
    HourRange: "",
  };
  const [waiting, setWaiting] = useState(false);
  const [jsonObject, setjsonObject] = useState(initJsonObject);

  const [slide, setSlide] = useState(0);
  return (
    <>
      <div className="container">
        <Header></Header>

        <div className="body">
          {slide == 0 && (
            <PresetFeed
              setWaiting={setWaiting}
              setjsonObject={setjsonObject}
              setSlide={setSlide}
            />
          )}
          {/* {<OptionalPartner setjsonObject={setjsonObject} />} */}
          {/* <BeforeStart setjsonObject={setjsonObject} /> */}
          {slide == 1 && (
            <DetailsForm setjsonObject={setjsonObject} setSlide={setSlide} />
          )}
          {slide == 2 && (
            <ChooseTime
              setjsonObject={setjsonObject}
              jsonObject={jsonObject}
              setSlide={setSlide}
            />
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
