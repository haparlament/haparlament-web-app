import React from "react";
import "../../styles.css/BeforeStart.css";

function BeforeStart() {
  return (
    <div className="mediume-card balbalbal">
      <div className="rules-div">
        <h3>עוד רגע מתחילים!</h3>
        <p className="rules-p">נזכיר את הכללים לשיחה בפרלמנט:</p>
        <p className="rules-p">
          1. להימנע משיח פוגעני <br />
          2. להקשיב לצד השני <br />
          3. להישמע להוראות שמופיעות על המסך
        </p>
      </div>
      <button className="lets-talk-button start-video-button stick-bottom">
        מסכים, בואו נתחיל
      </button>
    </div>
  );
}

export default BeforeStart;
