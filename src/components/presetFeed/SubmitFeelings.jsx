import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/SubmitFeelings.css";

function SubmitFeelings({
  imgID,
  selectedEmotionId,
  setjsonObject,
  setSlide,
  slide,
  handlePass,
}) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEmotionId) return;

    setjsonObject((prevState) => {
      return {
        ...prevState,
        ImageID: imgID.toString(),
        Feeling: selectedEmotionId.toString(),
      };
    });
    setSlide(slide + 1);
    navigate("/DetailsForm");
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
        <button
          className={`lets-talk-button ${
            selectedEmotionId ? null : "button-disabled"
          }`}
          onClick={handleSubmit}
        >
          בואו נדבר
        </button>
      </div>
    </div>
  );
}

export default SubmitFeelings;
