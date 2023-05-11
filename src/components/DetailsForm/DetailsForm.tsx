import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/DetailsForm.scss";
import { LeftArrow } from "../../styles.css/icons.svg/icons";
import { TwoLinesRight } from "../../styles.css/icons.svg/icons";
import { useDispatch, useSelector } from "react-redux";
import { SessionSubscriptionData, selectSessionSubscription, setSession } from "../../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice";
import { postSessionRequest } from "../../utils/session_request";

interface DetailsFormProps {
  setSlide: (slideIndex: number) => void, slide: number 
}
function DetailsForm({ setSlide, slide }: DetailsFormProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionSubscription = useSelector(selectSessionSubscription);

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const handleSubmit = async (sessionSubscription: SessionSubscriptionData) => {
    if (!checkUserNamevalid()) {
      setIsUserNameValid(false);
      return;
    }
    setIsUserNameValid(true);
    if (!checkPhoneNumbervalid()) {
      setIsPhoneNumberValid(false);
      return;
    }
    setIsPhoneNumberValid(true);
    const updatedSessionSubscription = {
      ...sessionSubscription,
      user: {
        phoneNumber,
        name: userName,
      }
    }
    dispatch(
      setSession(updatedSessionSubscription)
    );
    await postSessionRequest(updatedSessionSubscription);
    navigate("/session-request-sent");  
  };

  const checkPhoneNumbervalid = () => {
    const phoneNumberRegExp =
      /^(\+972|0|972|00972)[\- ]?([1-9]\d{1})[\- ]?([1-9]\d{6}|\d{3}[\- ]?\d{4})$/;
    return phoneNumberRegExp.test(phoneNumber);
  };

  const checkUserNamevalid = () => {
    return userName.length > 3 && userName.length < 50;
  };

  return (
    <div className="big-card details-form-div full-screen-mode">
      <div className="details-form-headers">
        <h1>בואו נדבר</h1>
        <h4>מלא פרטים כדי שנוכל ליצור איתך קשר</h4>
      </div>
      <form className="details-form-form" onSubmit={() => handleSubmit(sessionSubscription)}>
        <input
          id="name"
          className="deatils-inputs"
          placeholder="שם פרטי ושם משפחה"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {!isUserNameValid && (
          <span className="not-valid-text">השם אינו תקין</span>
        )}
        <br />
        <input
          className="deatils-inputs phone-deatils-inputs"
          id="phone"
          placeholder="מספר טלפון"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {!isPhoneNumberValid && (
          <span className="not-valid-text">מספר הטלפון אינו תקין</span>
        )}
        <br />
      </form>
      <div className="send-details-div">
        <button
          className="send-details-button"
          type="submit"
          onClick={() => handleSubmit(sessionSubscription)}
        >
          שלח פרטים
        </button>
      </div>

      {/* <div className="icons-div">
        <button type="submit" onClick={handleSubmit}>
          {LeftArrow}
        </button>
        <button>{TwoLinesRight}</button>
      </div> */}
    </div>
  );
}

export default DetailsForm;
