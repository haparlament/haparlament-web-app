import React from "react";
import { useState } from "react";
import "../../styles.css/OptionalPartner.css";
import ImageContentPreview from "../ImageContentPreview";
import PartnerOpinion from "./PartnerOpinion";
import StartVideo from "./StartVideo";

function OptionalPartner() {
  const [imgID, setImgID] = useState(null);

  return (
    <div className="mediume-card">
      <ImageContentPreview setImgID={setImgID} />
      <PartnerOpinion />
      <StartVideo />
    </div>
  );
}

export default OptionalPartner;
