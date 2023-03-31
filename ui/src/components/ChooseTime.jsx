// import React, { useState } from "react";
// // import "../../styles.css/DetailsForm.css";
// import { postSessionRequest } from "../utils/session_request";

// function ChooseTime({ setjsonObject, jsonObject }) {
//   const [day, setDay] = useState(null);
//   const [hour, setHour] = useState(null);

//   const exampleJson = {
//     ImageID: "levin2.jpeg",
//     Feeling: "שמח",
//     UserName: "שגיא בלכר",
//     PhoneNumber: "+972547669908",
//     Day: "ראשון",
//     HourRange: "08-10",
//   };

//   const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
//   const hours = [
//     "בוקר 10:00-12:00",
//     "12:00-14:00 צהריים",
//     "ערב 18:00-20:00",
//     "לילה 20:00-22:00",
//   ];

//   const handleDay = (day) => {
//     setjsonObject((prevState) => {
//       return { ...prevState, Day: day };
//     });
//   };

//   const handleHour = (hour) => {
//     setjsonObject((prevState) => {
//       return { ...prevState, HourRange: hour };
//     });
//   };

//   return (
//     <div className="big-card details-form-div bg-tp">
//       <div className="details-form-headers">
//         <h1>מתי נוח לך?</h1>
//         <h4>
// כדי שנוכל להתאים לך את האדם הנכון לשיחה בחר את הזמנים שבהם תהיה זמין
// לשיחה קצרה ומרתקת */
//         </h4>
//       </div>

//       <div className="days-div">
//         {days.map((day, i) => (
//           <button key={i} onClick={() => handleDay(day)}>
//             {day}
//           </button>
//         ))}
//       </div>
//       <div className="hours-div">
//         {hours.map((hour, i) => (
//           <button key={i} onClick={() => handleHour(hour)}>
//             {hour}
//           </button>
//         ))}
//       </div>

//       <div>
//         {/* <button>{LeftArrow}</button> */}
//         {/* <button>{TwoLinesRight}</button> */}
//       </div>
//       <button onClick={() => postSessionRequest(jsonObject)}>יציאה לapi</button>
//     </div>
//   );
// }

// export default ChooseTime;

// import React, { useState } from "react";
// // import "../../styles.css/DetailsForm.css";
// import { postSessionRequest } from "../utils/session_request";
import React, { useState } from "react";
import "../../src/styles.css/ChooseTime.css";
import { TwoLinesLeft } from "../styles.css/icons.svg/icons";
import { postSessionRequest } from "../utils/session_request";

// import "../../styles.css/DetailsForm.css";
// import { LeftArrow } from "../../styles.css/icons.svg/icons";
// import { TwoLinesLeft } from "../../styles.css/icons.svg/icons";
// import { TwoLinesRight } from "../../styles.css/icons.svg/icons";

function ChooseTime({ setjsonObject, jsonObject }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  // const hours = [
  //   "בוקר 10:00-12:00",
  //   "12:00-14:00 צהריים",
  //   "ערב 18:00-20:00",
  //   "לילה 20:00-22:00",
  // ];
  const [days, setDays] = useState([
    { day: "ראשון", isPreesed: false },
    { day: "שני", isPreesed: false },
    { day: "שלישי", isPreesed: false },
    { day: "רביעי", isPreesed: false },
    { day: "חמישי", isPreesed: false },
    { day: "שישי", isPreesed: false },
    { day: "שבת", isPreesed: false },
  ]);
  const [hours, setHours] = useState([
    { hour: "בוקר 10:00-12:00", isPreesed: false },
    { hour: "12:00-14:00 צהריים", isPreesed: false },
    { hour: "ערב 18:00-20:00", isPreesed: false },
    { hour: "לילה 20:00-22:00", isPreesed: false },
  ]);

  const handleDay = (day) => {
    day.isPreesed = !day.isPreesed;
    setjsonObject((prevState) => {
      return { ...prevState, Day: day };
    });
  };

  const handleHour = (hour) => {
    hour.isPreesed = !hour.isPreesed;
    setjsonObject((prevState) => {
      return { ...prevState, HourRange: hour.hour };
    });
  };

  return (
    <div className="big-card details-form-div bg-tp jc-sb">
      <div className="details-form-headers mb">
        <h1>מתי נוח לך?</h1>
        <h4>
          כדי שנוכל להתאים לך את האדם הנכון לשיחה בחר את הזמנים שבהם תהיה זמין
          לשיחה קצרה ומרתקת
        </h4>
      </div>
      <div>
        <div className="days-div">
          <span className="time-header">ימים</span>
          <div className="time-buttons-div">
            {days.map((day, i) => (
              <button
                className={`time-button ${
                  day.isPreesed ? "time-button-pressed" : null
                }`}
                key={i}
                onClick={() => handleDay(day)}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>
        <div className="days-div">
          <span className="time-header">שעות</span>
          <div className="time-buttons-div">
            {hours.map((hour, i) => (
              <button
                // className="time-button"
                className={`time-button ${
                  hour.isPreesed ? "time-button-pressed" : null
                }`}
                key={i}
                onClick={() => handleHour(hour)}
              >
                {hour.hour}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* <button onClick={() => postSessionRequest(jsonObject)}>שלח פרטים</button> */}
      <div className="icons-div w">
        <button
          className="send-details-button"
          type="submit"
          onClick={() => postSessionRequest(jsonObject)}
        >
          שלח פרטים
        </button>
        <button>{TwoLinesLeft}</button>
      </div>
    </div>
  );
}

export default ChooseTime;
