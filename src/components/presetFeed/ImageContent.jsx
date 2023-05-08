import React, { useState } from "react";
import Feelings from "../presetFeed/Feelings";
import SubmitFeelings from "./SubmitFeelings";
import { emotionSelectionImages } from "../../data/data";
import "../../styles.css/ImageContent.css";
import AYALON_PROTEST from "../../styles.css/images/ayalon-protest.jpg";
import HAREDI_LEARNING from "../../styles.css/images/haredi-learning.jpg";
import THE_SLAVE_MARCH from "../../styles.css/images/women-protest.jpg";

function ImageContent({ slide, setSlide }) {
  const images = {
    AYALON_PROTEST: AYALON_PROTEST,
    HAREDI_LEARNING: HAREDI_LEARNING,
    THE_SLAVE_MARCH: THE_SLAVE_MARCH
  }
  const [imageIndex, setImgIndex] = useState(0);
  const [imgID, setImgID] = useState(emotionSelectionImages[imageIndex].id);
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);

  function setNextImage() {
    const nextImageIndex = imageIndex < emotionSelectionImages.length - 1 ? imageIndex + 1 : 0;
    setImgID(emotionSelectionImages[nextImageIndex].id);
    setImgIndex(nextImageIndex)
  }

  const handlePass = () => {
    setNextImage();
    setSelectedEmotionId(null);
  };

  return (
    <div className="big-card">
      <div className="img-div">
        {<img src={images[imgID]} className="img-content" alt="" />}
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
