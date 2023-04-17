import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/SubmitFeelings.css";
import { useDispatch } from "react-redux";
import { setSession } from "./../../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice";
import { openPopup } from "../../stateManagement/modules/popupObject/popupObjectSlice";

function SubmitFeelings({
  imgID,
  selectedEmotionId,
  setSlide,
  slide,
  handlePass,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEmotionId) return;
    dispatch(
      setSession({
        imageId: imgID.toString(),
        feeling: selectedEmotionId.toString(),
      })
    );
    setSlide(slide + 1);
    navigate("/details-form");
  };

  return (
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
  );
}

export default SubmitFeelings;
