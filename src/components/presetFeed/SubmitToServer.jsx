import React, { useState } from "react";
import "../../styles.css/SubmitToServer.css";

function SubmitToServer({
  imgID,
  selectedEmotionId,
  optionalUserParagraph,
  user,
  setWaiting,
  handlePass,
  setjsonObject,
  setSlide,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEmotionId) return;

    // Get the user ID from Google auth
    // const userID = user.id; // Replace with actual user ID from Google auth

    // JSON creation
    // const jsonObject = {
    //   userID,
    //   imgID,
    //   selectedEmotionId,
    //   optionalUserParagraph,
    // };
    // setWaiting(true);
    // Log the JSON object to the console
    // console.log(jsonObject);
    setjsonObject((prevState) => {
      return {
        ...prevState,
        ImageID: imgID.toString(),
        Feeling: selectedEmotionId.toString(),
      };
    });
    setSlide(1);
  };

  return (
    <div>
      <div className="lets-talk-div">
        <button
          className="lets-talk-button pass-button"
          onClick={() => handlePass()}
        >
          דלג
        </button>
        <button className="lets-talk-button" onClick={handleSubmit}>
          בואו נדבר
        </button>
      </div>
    </div>
  );
}

export default SubmitToServer;
