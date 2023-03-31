import React, { useState } from "react";
// import "../../styles.css/DetailsForm.css";

function ChooseTime() {
  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);

  return (
    <div className="big-card details-form-div bg-tp">
      <div className="details-form-headers">
        <h1>מתי נוח לך?</h1>
        <h4>
          כדי שנוכל להתאים לך את האדם הנכון לשיחה בחר את הזמנים שבהם תהיה זמין
          לשיחה קצרה ומרתקת */
        </h4>
      </div>

      <div className="days-div">
        <button>ראשון</button>
        <button>שני</button>
        <button>שלישי</button>
        <button>רביעי</button>
        <button>חמישי</button>
        <button>שישי</button>
        <button>שבת</button>
      </div>
      <div className="hours-div">
        <button>בוקר 12 עד 14</button>
        <button>בוקר 12 עד 14</button>
        <button>בוקר 12 עד 14</button>
        <button>בוקר 12 עד 14</button>
        <button>בוקר 12 עד 14</button>
      </div>

      <div>
        {/* <button>{LeftArrow}</button> */}
        {/* <button>{TwoLinesRight}</button> */}
      </div>
    </div>
  );
}

export default ChooseTime;
