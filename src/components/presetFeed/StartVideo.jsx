import React from "react";
import "../../styles.css/SubmitFeelings.css";
import "../../styles.css/StartVideo.css";

function StartVideo() {
  return (
    <div className="start-video">
      <button className="lets-talk-button start-video-button">
        <span>התחל שיחת וידאו</span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8948 13.0612L26.3912 10.3777C27.049 9.87281 28 10.3418 28 11.1709V20.829C28 21.6582 27.049 22.1272 26.3912 21.6223L22.8948 18.9388"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M22.8947 12.8857V11C22.8947 9.34315 21.5516 8 19.8947 8H8C6.34315 8 5 9.34315 5 11V21C5 22.6569 6.34315 24 8 24H19.8947C21.5516 24 22.8947 22.6569 22.8947 21V19.5286"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle cx="17.5" cy="18.5" r="1.5" fill="white" />
        </svg>
      </button>
    </div>
  );
}

export default StartVideo;
