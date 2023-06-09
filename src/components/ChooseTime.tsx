/// <reference path="../custom-modules.d.ts" />

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles.css/ChooseTime.css";
import { TwoLinesLeft } from "../styles.css/icons.svg/icons";
import { postSessionRequest } from "../utils/session_request";
import { useDispatch, useSelector } from "react-redux";
import { DAYS_OF_WEEK } from "../constants";
import LoadingSubmitButton from "./LoadingSubmitButton/LoadingSubmitButton";

import moonIcon from "../styles.css/images/moonIcon.png";
import sunIcon from "../styles.css/images/sunIcon.png";

import {
  selectSessionSubscription,
  setSession,
} from "../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice";
import type { SessionSubscriptionData, Time } from "../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice";

interface HoursRange {
  text: string,
  from: Time,
  to: Time
}

type DayInfo = {day: string, isPressed: boolean, text: string}
type HoursRangeInfo = {hour: HoursRange, isPressed: boolean}

const HOURS_RANGES = {
  MORNING: {
    text: "בוקר",
    icon: sunIcon,
    from: {
      hour: 8,
      minute: 0
    },
    to: {
      hour: 14,
      minute: 0
    }
  },
  EVENING: {
    text: "ערב",
    icon: moonIcon,
    from: {
      hour: 14,
      minute: 0
    },
    to: {
      hour: 22,
      minute: 0
    }
  }
}

function ChooseTime() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = React.useState(false);  
  const sessionSubscription = useSelector(selectSessionSubscription);

  const [days] = useState([
    { day: DAYS_OF_WEEK.SUNDAY, text: 'ראשון', isPressed: false },
    { day: DAYS_OF_WEEK.MONDAY, text: 'שני', isPressed: false },
    { day: DAYS_OF_WEEK.TUESDAY, text: 'שלישי', isPressed: false },
    { day: DAYS_OF_WEEK.WEDNESDAY, text: 'רביעי', isPressed: false },
    { day: DAYS_OF_WEEK.THURSDAY, text: 'חמישי', isPressed: false },
    { day: DAYS_OF_WEEK.FRIDAY, text: 'שישי', isPressed: false },
    { day: DAYS_OF_WEEK.SATURDAY, text: 'שבת', isPressed: false },
  ]);

  const [hoursRanges, setHoursRanges] = useState([
    { hour: HOURS_RANGES.MORNING, isPressed: false },
    { hour: HOURS_RANGES.EVENING, isPressed: false },
  ]);

  function getTimeAvailability(
    daysArr: Array<DayInfo>, 
    hoursRanges: Array<HoursRangeInfo>): SessionSubscriptionData['timeAvailability'] {
    return {
      days: daysArr.map(dayObj => dayObj.day),
      hoursRanges: hoursRanges
        .filter(hourObj => hourObj.isPressed)
        .map(hourObj => ({from: hourObj.hour.from, to: hourObj.hour.to}))
    }
  }

  const handleHour = (index: number) => {
    const newHoursArr = [...hoursRanges];
    newHoursArr[index] = {
      ...newHoursArr[index],
      isPressed: !newHoursArr[index].isPressed,
    };
    setHoursRanges(newHoursArr);
    dispatch(
      setSession({
        ...sessionSubscription,
        timeAvailability: getTimeAvailability(
          days, 
          newHoursArr)
      })
    );
  };

  const handleSubmit = async (session: SessionSubscriptionData) => {
    console.log("handleSubmit", session);
    if (!session.timeAvailability.hoursRanges) {
      // TODO handle error
    } else {
      await postSessionRequest(session);
      navigate("/session-request-sent");
    }
  };

  return (
    <div className="big-card details-form-div full-screen-mode jc-sb">
      <div className="details-form-headers mb">
        <h1>מתי נוח לך?</h1>
        <h4>
          כדי שנוכל להתאים לך את האדם הנכון לשיחה בחר את הזמנים שבהם תהיה זמין
          לשיחה קצרה ומרתקת
        </h4>
      </div>
      <div>
        <div className="days-div">
          <div className="time-buttons-div">
            {hoursRanges.map((hourRange, i) => (
              <button
                className={`time-button ${hourRange.isPressed ? "time-button-pressed" : null
                  }`}
                key={i}
                onClick={() => handleHour(i)}
              >
                {hourRange.hour.text}
                <img className="time-icon" src={hourRange.hour.icon} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="send-details-div">
        <LoadingSubmitButton
          className="send-details-button"
          onClick={!isSubmitting ? () => {
            setIsSubmitting(true)
            handleSubmit(sessionSubscription)
          } : undefined
          }
          isLoading={isSubmitting}
          disabled={getTimeAvailability(days, hoursRanges).hoursRanges.length === 0}
        >
          שלח פרטים
        </LoadingSubmitButton>
        <button>{TwoLinesLeft}</button>
      </div>
    </div>
  );
}

export default ChooseTime;
