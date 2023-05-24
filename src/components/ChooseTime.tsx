import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles.css/ChooseTime.css";
import { TwoLinesLeft, MoonIcon, SunIcon } from "../styles.css/icons.svg/icons";
import { postSessionRequest } from "../utils/session_request";
import { useDispatch, useSelector } from "react-redux";
import { DAYS_OF_WEEK } from "../constants";
import LoadingSubmitButton from "./LoadingSubmitButton/LoadingSubmitButton";

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
    text: "בבוקר",
    icon: SunIcon,
    from: {
      hour: 10,
      minute: 0
    },
    to: {
      hour: 12,
      minute: 0
    }
  },
  EVENING: {
    text: "בערב",
    icon: MoonIcon,
    from: {
      hour: 20,
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

  const [days, setDays] = useState([
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
            {hoursRanges.map(({isPressed, hour}, i) => (
              <button
                className={`time-button ${isPressed ? "time-button-pressed" : null
                  }`}
                key={i}
                onClick={() => handleHour(i)}
              >
                <div className="time-icon">
                  {hour.icon}
                </div>
                {hour.text}
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
