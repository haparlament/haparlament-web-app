import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/WelcomePage.css";

function WelcomePage({ slide, setSlide }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/ImageContent");
    setSlide(slide + 1);
  };

  const instructions = [
    {
      index: 1,
      text: "בכל עמוד נציג לכם תמונה שונה בנושא הרפורמה, אתם תבחרו ברגש שהתמונה מעלה בכם",
    },
    {
      index: 2,
      text: "אם תרצו לדבר על הנושא שהתמונה מייצגת תלחצו על ״בואו נדבר״",
    },
    {
      index: 3,
      text: "אנחנו נקבע לכם שיחת ווידאו משותפת עם מישהו מתחושות ודעות שונות משלכם ",
    },
  ];

  return (
    <div className="big-card">
      <div className="instructions-header-div">
        <h1>ברוכים הבאים לפרלמנט</h1>
        <h3>איך זה עובד, אתם שואלים?</h3>
      </div>
      <div className="instructions-div">
        {instructions.map((instruction) => (
          <div key={instruction.index} className="instruction">
            <span className="dot-icon">{instruction.index}</span>
            <span className="dot-text">{instruction.text}</span>
          </div>
        ))}
      </div>
      <button className="instructions-button" onClick={handleSubmit}>
        יאללה, בואו נתחיל
      </button>
    </div>
  );
}

export default WelcomePage;
