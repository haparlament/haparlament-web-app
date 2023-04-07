import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import "../../src/styles.css/ChooseTime.css";
import { TwoLinesLeft } from "../styles.css/icons.svg/icons";
import { postSessionRequest } from "../utils/session_request";

function ChooseTime({ setjsonObject, jsonObject, setSlide, slide }) {
  const navigate = useNavigate();
  const [days] = useState([
    { day: "ראשון", isPreesed: false },
    { day: "שני", isPreesed: false },
    { day: "שלישי", isPreesed: false },
    { day: "רביעי", isPreesed: false },
    { day: "חמישי", isPreesed: false },
    { day: "שישי", isPreesed: false },
    { day: "שבת", isPreesed: false },
  ]);

  const [hours] = useState([
    { hour: "בוקר 10:00-12:00", isPreesed: false },
    { hour: "צהריים 10:00-12:00", isPreesed: false },
    { hour: "ערב 18:00-20:00", isPreesed: false },
    { hour: "לילה 20:00-22:00", isPreesed: false },
  ]);

  const handleDay = (day) => {
    day.isPreesed = !day.isPreesed;
    setjsonObject((prevState) => {
      return { ...prevState, Day: day.day };
    });
  };

  const handleHour = (hour) => {
    hour.isPreesed = !hour.isPreesed;
    setjsonObject((prevState) => {
      return { ...prevState, HourRange: hour.hour };
    });
  };

  const [showPopup, setShowPopup] = useState(false);
  const [showChooseTimePopUp, setShowChooseTimePopUp] = useState(false);

  const handleConfirm = () => {
    console.log("Confirmed!");
    setShowPopup(false);
    setSlide(0);
    navigate("/ImageContent");
  };

  const handleCancel = () => {
    console.log("Canceled!");
    setShowPopup(false);
  };

  const handleChooseTime = () => {
    setShowChooseTimePopUp(false);
  };

  const handleSubmit = (jsonObject) => {
    if (jsonObject.HourRange === "") {
      setShowChooseTimePopUp(true);
    } else {
      console.log("sagy log: ", jsonObject);
      postSessionRequest(jsonObject);
      setShowPopup(true);
    }
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

      <div className="send-details-div">
        <button
          className="send-details-button"
          type="submit"
          onClick={() => handleSubmit(jsonObject)}
        >
          שלח פרטים
        </button>
        <button>{TwoLinesLeft}</button>
      </div>
      <div>
        {showPopup && (
          <>
            <div className="darken"></div>
            <Popup
              title="מעולה! פרטיך נשלחו"
              text="בקרוב ניצור איתך קשר בוואטסאפ ונקשר אותך לשיחה עם אדם עם תחושות שונות בנושא שבחרת"
              handleConfirm={handleConfirm}
              handleCancel={handleCancel}
              keepCancelButton={true}
            />
          </>
        )}
        {showChooseTimePopUp && (
          <>
            <div className="darken"></div>
            <Popup
              title="אנא בחר זמן שבו תהייה פנוי לשיחה"
              text="כדי שנוכל ליצור איתך קשר בזמן שמתאים לך"
              handleConfirm={handleChooseTime}
              handleCancel={handleChooseTime}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ChooseTime;
