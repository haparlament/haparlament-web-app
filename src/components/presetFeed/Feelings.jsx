import React from "react";
import "../../styles.css/Feelings.css";
import { EMOTIONS } from "./../../constants";
function Feelings({ selectedEmotionId, setSelectedEmotionId }) {

  const emotions = [
    { id: EMOTIONS.ANGER, label: "כעס" },
    { id: EMOTIONS.HOPE, label: "תקווה" },
    { id: EMOTIONS.SADNESS, label: "עצב" },
    { id: EMOTIONS.HAPPYNESS, label: "שמחה" },
    { id: EMOTIONS.FRUSTRATION, label: "תסכול" },
    { id: EMOTIONS.DISAPPOINTMENT, label: "אכזבה" },
    { id: EMOTIONS.AFFECTION, label: "חיבה" },
    { id: EMOTIONS.DESPERATION, label: "ייאוש" },
  ];

  const handleEmotionClick = (e, id) => {
    e.preventDefault();
    setSelectedEmotionId(id);
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
