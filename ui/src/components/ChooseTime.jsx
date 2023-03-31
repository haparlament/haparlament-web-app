import React, { useState } from "react";
// import "../../styles.css/DetailsForm.css";
import { postSessionRequest } from "../utils/session_request";

function ChooseTime() {
  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);

  const exampleJson = {
    ImageID: "levin2.jpeg",
    Feeling: "שמח",
    UserName: "שגיא בלכר",
    PhoneNumber: "+972547669908",
    Day: "ראשון",
    HourRange: "08-10",
  };

  const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  const hours = [
    "בוקר 10:00-12:00",
    "12:00-14:00 צהריים",
    "ערב 18:00-20:00",
    "לילה 20:00-22:00",
  ];

  const handleDay = (day) => {
    setDay(day);
    console.log(day);
  };

  const handleHour = (hour) => {
    setHour(hour);
    console.log(hour);
  };

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
        {days.map((day, i) => (
          <button key={i} onClick={() => handleDay(day)}>
            {day}
          </button>
        ))}
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
      <button onClick={() => postSessionRequest(exampleJson)}>
        יציאה לapi
      </button>
    </div>
  );
}

export default ChooseTime;
