import React from "react";
import "../../styles.css/PartnerOpinion.css";
import ProfilePic2 from "../../styles.css/images/profilepic2.jpeg";

function PartnerOpinion() {
  return (
    <div className="partner-opinion">
      <img className="partner-profile-img" src={ProfilePic2} alt="" />

      <div className="partner-opinion-div">
        <span className="partner-opinion-span">
          מממ... מעניין, דווקא אורטל מרגישה לגבי זה
        </span>
        <button className="feeling-button">תקווה</button>
      </div>
    </div>
  );
}

export default PartnerOpinion;
