import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import "../../src/styles.css/ChooseTime.css";
import { TwoLinesLeft } from "../styles.css/icons.svg/icons";
import { postSessionRequest } from "../utils/session_request";

function ChooseTime({ setjsonObject, jsonObject, setSlide, slide }) {
  const navigate = useNavigate();
  const [isTimeValid, setIsTimeValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorTimePopUp, setShowErrorTimePopUp] = useState(false);

  const [days, setDays] = useState([
    { day: "ראשון", isPressed: false },
    { day: "שני", isPressed: false },
    { day: "שלישי", isPressed: false },
    { day: "רביעי", isPressed: false },
    { day: "חמישי", isPressed: false },
    { day: "שישי", isPressed: false },
    { day: "שבת", isPressed: false },
  ]);

  const [hours, setHours] = useState([
    { hour: "בוקר 10:00-12:00", isPressed: false },
    { hour: "צהריים 10:00-12:00", isPressed: false },
    { hour: "ערב 18:00-20:00", isPressed: false },
    { hour: "לילה 20:00-22:00", isPressed: false },
  ]);

  const handleDay = (d) => {
    setDays(
      days.map((element) => {
        if (d.day === element.day) {
          return { ...element, isPressed: !element.isPressed };
        } else {
          return element;
        }
      })
    );
  };

  const handleHour = (h) => {
    setHours(
      hours.map((element) => {
        if (h.hour === element.hour) {
          return { ...element, isPressed: !element.isPressed };
        } else {
          return element;
        }
      })
    );
  };

  useEffect(() => {
    const isDaysValid = days.some((d) => d.isPressed === true);
    const isHoursValid = hours.some((h) => h.isPressed === true);
    setIsTimeValid(isDaysValid && isHoursValid);
  }, [days, hours]);

  const handleSubmit = (jsonObject) => {
    // verify details are valid
    if (!isTimeValid) {
      setShowErrorTimePopUp(true);
      return;
    }
    // prepare json object
    const selectedDays = days.filter((d) => d.isPressed).map((d) => d.day);
    const selectedHourRanges = hours
      .filter((h) => h.isPressed)
      .map((h) => h.hour);
    setjsonObject((prevJsonState) => {
      return { ...prevJsonState, selectedDays, selectedHourRanges };
    });

    // set pop up to rise up
    setShowPopup(true);
  };

  const handleConfirm = () => {
    // send details to back
    postSessionRequest(jsonObject);
    setShowPopup(false);
    setSlide(0);
    navigate("/emotions-selection");
  };

  const handleCancel = () => {
    setjsonObject((prevJsonState) => {
      return { ...prevJsonState, selectedDays: [], selectedHourRanges: [] };
    });
    setShowPopup(false);
  };

  const handleChooseTime = () => {
    setShowErrorTimePopUp(false);
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
                  day.isPressed ? "time-button-pressed" : null
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
                  hour.isPressed ? "time-button-pressed" : null
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
          className={`send-details-button ${
            isTimeValid ? null : "button-disabled"
          }`}
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
        {showErrorTimePopUp && (
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
