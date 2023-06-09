import React, { useState } from "react";
import Header from "./components/Header";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import ChooseTime from "./components/ChooseTime";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ImageContent from "./components/presetFeed/ImageContent";
import SessionSentMessage from "./components/pages/SessionSentMessage";


import "./styles.css/App.scss";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Popup from "./components/Popup"
import { useSelector } from "react-redux";

import {
  selectPopupInfo
} from "./stateManagement/modules/popupInfo/popupInfoSlice";
import VideoCall from "./pages/VideoCall/VideoCall";


function App() {
  const [slide, setSlide] = useState(-1);
  const popupInfo = useSelector(selectPopupInfo);


  return (
    <BrowserRouter>

      <div className="container">
        {popupInfo && <Popup
          {...popupInfo}
        />}
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
                  slide={slide}
                  setSlide={setSlide}
                />
              }
            />
            <Route
              path="/details-form"
              element={
                <DetailsForm
                  setSlide={setSlide}
                  slide={slide}
                />
              }
            />
            <Route
              path="/time-selection"
              element={
                <ChooseTime />
              }
            />
            <Route
              path="/session-request-sent"
              element={
                <SessionSentMessage />
              }
            />
            <Route
              path="/video-call"
              element={
                <VideoCall />
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
