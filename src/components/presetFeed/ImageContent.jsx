import React, { useState } from "react";
import Feelings from "../presetFeed/Feelings";
import SubmitFeelings from "./SubmitFeelings";
import { emotionSelectionImages } from "../../data/data";
import "../../styles.css/ImageContent.css";

function ImageContent({ slide, setSlide }) {
  const [imageIndex, setImgIndex] = useState(0);
  const [imgURL, setImgURL] = useState(emotionSelectionImages[imageIndex].url);

  const [imgID, setImgID] = useState(emotionSelectionImages[imageIndex].id);
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);

  function setNextImage() {
    const nextImageIndex = imageIndex < emotionSelectionImages.length - 1 ? imageIndex + 1 : 0;
    setImgID(emotionSelectionImages[nextImageIndex].id);
    setImgURL(emotionSelectionImages[nextImageIndex].url)
    setImgIndex(nextImageIndex)
  }

  const handlePass = () => {
    setNextImage();
    setSelectedEmotionId(null);
  };

  return (
    <div className="big-card">
      <div className="img-div">
        {imgURL && <img src={imgURL} className="img-content" alt="" />}
      </div>
      <Feelings
        selectedEmotionId={selectedEmotionId}
        setSelectedEmotionId={setSelectedEmotionId}
      />
      <SubmitFeelings
        imgID={imgID}
        selectedEmotionId={selectedEmotionId}
        setSlide={setSlide}
        slide={slide}
        handlePass={handlePass}
      />
    </div>
  );
}

export default ImageContent;
