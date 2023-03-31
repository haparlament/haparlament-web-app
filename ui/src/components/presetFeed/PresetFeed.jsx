import React, { useState } from "react";
import ImageContent from "./ImageContent";
import Feelings from "./Feelings";
import SubmitToServer from "./SubmitToServer";
import data from "../../data/data";
import "../../styles.css/PresetFeed.css";
import OptionalPartner from "./OptionalPartner";
import BeforeStart from "./BeforeStart";
import Card from "../Card";

function PresetFeed({ setWaiting }) {
  const user = data.user;
  const [imgID, setImgID] = useState(null);
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);
  const [optionalUserParagraph, setOptionalUserParagraph] = useState("");

  return (
    <div className="big-card">
      <ImageContent setImgID={setImgID} />
      <Feelings
        selectedEmotionId={selectedEmotionId}
        setSelectedEmotionId={setSelectedEmotionId}
        optionalUserParagraph={optionalUserParagraph}
        setOptionalUserParagraph={setOptionalUserParagraph}
      />
      <SubmitToServer
        imgID={imgID}
        selectedEmotionId={selectedEmotionId}
        optionalUserParagraph={optionalUserParagraph}
        user={user}
        setWaiting={setWaiting}
      />
    </div>
  );
}

export default PresetFeed;
