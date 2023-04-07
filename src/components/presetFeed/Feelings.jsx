import React, { useState } from "react";
import "../../styles.css/Feelings.css";

function Feelings({
  selectedEmotionId,
  setSelectedEmotionId,
  optionalUserParagraph,
  setOptionalUserParagraph,
}) {
  const emotions = [
    { id: 1, label: "כעס" },
    { id: 2, label: "תקווה" },
    { id: 3, label: "עצב" },
    { id: 4, label: "שמחה" },
    { id: 5, label: "תסכול" },
    { id: 6, label: "אכזבה" },
    { id: 7, label: "חיבה" },
    { id: 8, label: "ייאוש" },
  ];

  const handleEmotionClick = (e, id) => {
    e.preventDefault();
    setSelectedEmotionId(id);
  };

  const handleInputChange = (e) => {
    setOptionalUserParagraph(e.target.value);
  };

  return (
    <div className="feelings-div">
      <h5 className="feelings-header">מה התמונה גורמת לך להרגיש?</h5>
      <div className="container-row-feelings">
        {emotions.map((emotion) => (
          <button
            className={`feeling-button ${
              selectedEmotionId === emotion.id ? "pressed" : ""
            }`}
            key={emotion.id}
            onClick={(e) => handleEmotionClick(e, emotion.id)}
          >
            {emotion.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Feelings;
