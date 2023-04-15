import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import ChooseTime from "./components/ChooseTime";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ImageContent from "./components/presetFeed/ImageContent";
import "./styles.css/App.scss";
import { Provider } from 'react-redux';
import { store } from './stateManagement/store';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const [slide, setSlide] = useState(-1);

  return (
    <BrowserRouter>
      <Provider store={store}>
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
                <ChooseTime
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
        <Footer></Footer>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
