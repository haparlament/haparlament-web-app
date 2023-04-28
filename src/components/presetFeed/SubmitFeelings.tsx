import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/SubmitFeelings.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSessionSubscription, setSession } from "../../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice";

interface SubmitFeelingsProps {
  imgID: string,
  selectedEmotionId: string,
  setSlide: (index: number) => void
  slide: number,
  handlePass: () => void
}

function SubmitFeelings({
  imgID,
  selectedEmotionId,
  setSlide,
  slide,
  handlePass,
}: SubmitFeelingsProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionSubscription = useSelector(selectSessionSubscription);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!selectedEmotionId) return;
    dispatch(
      setSession({
        ...sessionSubscription,
        imageEmotion: {
          imageId: imgID.toString(),
          emotion: selectedEmotionId.toString(),
        }
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
