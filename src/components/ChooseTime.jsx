import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import "../../src/styles.css/ChooseTime.css";
import { TwoLinesLeft } from "../styles.css/icons.svg/icons";
import { postSessionRequest } from "../utils/session_request";
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSessionSubscription,
  setSession
} from './../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice';

function ChooseTime({ setSlide, slide }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionSubscription = useSelector(selectSessionSubscription);

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

  const handleDay = (index, day) => {
    const newDaysArr = [...days]
    newDaysArr[index] = {
      day: newDaysArr[index].day,
      isPressed: !newDaysArr[index].isPressed
    }
    setDays(newDaysArr)
    dispatch(setSession({
      day: day.day
    }));
  };

  const handleHour = (index, hour) => {
    const newHoursArr = [...hours]
    newHoursArr[index] = {
      hour: newHoursArr[index].hour,
      isPressed: !newHoursArr[index].isPressed
    }
    setHours(newHoursArr)
    // hour.isPressed = !hour.isPressed;
    dispatch(setSession({
      hourRange: hour.hour
    }));
  };

  const [showPopup, setShowPopup] = useState(false);
  const [showChooseTimePopUp, setShowChooseTimePopUp] = useState(false);

  const handleConfirm = () => {
    console.log("Confirmed!");
    setShowPopup(false);
    setSlide(0);
    navigate("/emotions-selection");
  };

  const handleCancel = () => {
    console.log("Canceled!");
    setShowPopup(false);
  };

  const handleChooseTime = () => {
    setShowChooseTimePopUp(false);
  };

  const handleSubmit = (session) => {
    console.log('handleSubmit', session)
    if (session.hourRange === "") {
      setShowChooseTimePopUp(true);
    } else {
      postSessionRequest(session);
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
                  day.isPressed ? "time-button-pressed" : null
                }`}
                key={i}
                onClick={() => handleDay(i, day)}
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
                onClick={() => handleHour(i, hour)}
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
          onClick={() => handleSubmit(sessionSubscription)}
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
