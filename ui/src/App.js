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
  return (
    <div className="container">
      <Header></Header>

      <div className="body">
        <PresetFeed setWaiting={setWaiting} setjsonObject={setjsonObject} />
        {/* <OptionalPartner setjsonObject={setjsonObject} /> */}
        {/* <BeforeStart setjsonObject={setjsonObject} /> */}
        <DetailsForm setjsonObject={setjsonObject} />
        <ChooseTime setjsonObject={setjsonObject} />
      </div>
      {/* important */}
      {/* <button
        onClick={() =>
          setjsonObject((prevState) => {
            return { ...prevState, Day: "monday" };
          })
        }
      >
        try2
      </button> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
