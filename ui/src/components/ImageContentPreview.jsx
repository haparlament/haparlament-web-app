import React, { useEffect, useState } from "react";
import data from "../data/data";
import "../styles.css/ImageContent.css";
import "../styles.css/ImageContentPreview.css";

function ImageContentPreview({ setImgID }) {
  const images = data.images;
  const [imgURL, setImgURL] = useState(null);

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
    <div>
      {imgURL && <img src={imgURL} className="img-content-preview" alt="" />}
    </div>
  );
}

export default ImageContentPreview;
