import React, { useEffect, useState } from "react";
import Feelings from "../presetFeed/Feelings";
import SubmitFeelings from "./SubmitFeelings";
import data from "../../data/data";
import "../../styles.css/ImageContent.css";

function ImageContent({ setjsonObject, slide, setSlide }) {
  const images = data.images;
  const [imgURL, setImgURL] = useState(null);

  const [imgID, setImgID] = useState(null);
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);

  function getRandomImgUrl(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImgID(randomIndex);
    return images[randomIndex].url;
  }

  useEffect(() => changeImg(), []);

  const changeImg = () => {
    setImgURL(getRandomImgUrl(images));
  };

  const handlePass = () => {
    changeImg();
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
        setjsonObject={setjsonObject}
      />
      <SubmitFeelings
        imgID={imgID}
        selectedEmotionId={selectedEmotionId}
        setjsonObject={setjsonObject}
        setSlide={setSlide}
        slide={slide}
        handlePass={handlePass}
      />
    </div>
  );
}

export default ImageContent;
