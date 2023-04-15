import React, { useState } from "react";
import Header from "./components/Header";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import ChooseTime from "./components/ChooseTime";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ImageContent from "./components/presetFeed/ImageContent";
import "./styles.css/App.scss";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const initJsonObject = {
    imageId: "",
    feeling: "",
    username: "",
    phoneNumber: "",
    day: "",
    hourRange: "",
  };

  const [jsonObject, setjsonObject] = useState(initJsonObject);
  const [slide, setSlide] = useState(-1);

  return (
    <BrowserRouter>
      <div className="container">
        <Header></Header>
        <div className="body">
          <Routes>
            <Route
              path="/"
              element={<WelcomePage slide={slide} setSlide={setSlide} />}
            />
            <Route
              path="/emotions-selection"
              element={
                <ImageContent
                  setjsonObject={setjsonObject}
                  slide={slide}
                  setSlide={setSlide}
                />
              }
            />
            <Route
              path="/details-form"
              element={
                <DetailsForm
                  setjsonObject={setjsonObject}
                  setSlide={setSlide}
                  slide={slide}
                />
              }
            />
            <Route
              path="/time-selection"
              element={
                <ChooseTime
                  setjsonObject={setjsonObject}
                  jsonObject={jsonObject}
                  setSlide={setSlide}
                  slide={slide}
                />
              }
            />
            <Route
              path="*"
              element={
                <div>
                  <h1>404 ERROR</h1>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
