import React, { useEffect, useState } from "react";
import data from "../../data/data";
import "../../styles.css/ImageContent.css";

function ImageContent({ setImgID }) {
  const images = data.images;
  const [imgURL, setImgURL] = useState(null);

  const tryFunc = () => {
    console.log("try func pressed!");
  };

  function getRandomImgUrl(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImgID(randomIndex);
    return images[randomIndex].url;
  }

  useEffect(() => changeImg(), []);

  const changeImg = () => {
    setImgURL(getRandomImgUrl(images));
  };

  return (
    <div className="img-div">
      {imgURL && <img src={imgURL} className="img-content" alt="" />}
    </div>
  );
}

export default ImageContent;
