import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/DetailsForm.scss";
import { LeftArrow } from "../../styles.css/icons.svg/icons";
import { TwoLinesRight } from "../../styles.css/icons.svg/icons";
import { useDispatch } from "react-redux";
import { setSession } from "./../../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice";
import {
  closePopup,
  openPopup,
} from "../../stateManagement/modules/popupObject/popupObjectSlice";

function DetailsForm({ setSlide, slide }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const [showNotValidUserName, setShowNotValidUserName] = useState(false);
  const [showNotValidPhoneNumber, setShowNotValidPhoneNumber] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUserNameValid) {
      setShowNotValidUserName(true);
    }
    if (!isPhoneNumberValid) {
      setShowNotValidPhoneNumber(true);
    }
    if (isUserNameValid && isPhoneNumberValid) {
      dispatch(
        setSession({
          phoneNumber: phoneNumber,
          userName: userName,
        })
      );
      setSlide(slide + 1);
      navigate("/time-selection");
    }
  };

  const checkPhoneNumbervalid = () => {
    // regex know this templates:
    // 052-111-2222
    // 052-1112222
    // 0521112222
    // 052 111 2222
    // 972521112222
    // 972-52-111-2222
    // +972-52-111-2222
    // 00972521112222
    const phoneNumberRegExp =
      /^(\+972|0|972|00972)[\- ]?([1-9]\d{1})[\- ]?([1-9]\d{6}|\d{3}[\- ]?\d{4})$/;
    return phoneNumberRegExp.test(phoneNumber);
  };

  const checkUserNamevalid = () => {
    return userName.length > 3 && userName.length < 50;
  };

  useEffect(() => {
    setIsUserNameValid(checkUserNamevalid());
  }, [userName]);

  useEffect(() => {
    setIsPhoneNumberValid(checkPhoneNumbervalid());
  }, [phoneNumber]);

  return (
    <div className="big-card details-form-div full-screen-mode">
      <div className="details-form-headers">
        <h1>בואו נדבר</h1>
        <h4>מלא פרטים כדי שנוכל ליצור איתך קשר</h4>
      </div>
      <form className="details-form-form" onSubmit={handleSubmit}>
        <input
          id="name"
          className="deatils-inputs"
          placeholder="שם פרטי ושם משפחה"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {showNotValidUserName && !isUserNameValid && <span>השם אינו תקין</span>}
        <br />
        <input
          className="deatils-inputs phone-deatils-inputs"
          id="phone"
          placeholder="מספר טלפון"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {showNotValidPhoneNumber && !isPhoneNumberValid && (
          <span className="not-valid-text">מספר הטלפון אינו תקין</span>
        )}
        <br />
      </form>
      <div className="icons-div">
        <button type="submit" onClick={handleSubmit}>
          {LeftArrow}
        </button>
        <button>{TwoLinesRight}</button>
      </div>
    </div>
  );
}

export default DetailsForm;
