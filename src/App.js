import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import ChooseTime from "./components/ChooseTime";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ImageContent from "./components/presetFeed/ImageContent";
import "./styles.css/App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const initJsonObject = {
    ImageID: "",
    Feeling: "",
    UserName: "",
    PhoneNumber: "",
    Day: "",
    HourRange: "",
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
              path="/ImageContent"
              element={
                <ImageContent
                  setjsonObject={setjsonObject}
                  slide={slide}
                  setSlide={setSlide}
                />
              }
            />
            <Route
              path="/DetailsForm"
              element={
                <DetailsForm
                  setjsonObject={setjsonObject}
                  setSlide={setSlide}
                  slide={slide}
                />
              }
            />
            <Route
              path="/ChooseTime"
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
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

// In case deciding that routes isn't secured
// users can jump directly to submission without filling in all needed details.

// <div className="container">
//   <Header></Header>

//   <div className="body">
//     {slide === -1 && <WelcomePage slide={slide} setSlide={setSlide} />}

//     {slide === 0 && (
//       <ImageContent
//         setjsonObject={setjsonObject}
//         slide={slide}
//         setSlide={setSlide}
//       />
//     )}
//     {/* {<OptionalPartner setjsonObject={setjsonObject} />} */}
//     {slide === 1 && (
//       <DetailsForm
//         setjsonObject={setjsonObject}
//         setSlide={setSlide}
//         slide={slide}
//       />
//     )}
//     {slide === 2 && (
//       <ChooseTime
//         setjsonObject={setjsonObject}
//         jsonObject={jsonObject}
//         setSlide={setSlide}
//         slide={slide}
//       />
//     )}
//   </div>
//   <Footer></Footer>
// </div>;
