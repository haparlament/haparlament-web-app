import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/DetailsForm.css";
import { LeftArrow, LeftArrowDisabled } from "../../styles.css/icons.svg/icons";
import { TwoLinesRight } from "../../styles.css/icons.svg/icons";
import Popup from "../Popup";

function DetailsForm({ setjsonObject, setSlide, slide }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const [showNotValidName, setShowNotValidName] = useState(false);
  const [showNotValidPhoneNumber, setShowNotValidPhoneNumber] = useState(false);

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
    const phoneNumRegExp =
      /^(\+972|0|972|00972)[\- ]?([1-9]\d{1})[\- ]?([1-9]\d{6}|\d{3}[\- ]?\d{4})$/;
    return phoneNumRegExp.test(phoneNumber);
  };

  // No charcters check for now, only characters count limit
  const checkNamevalid = () => {
    return name.length > 3 && name.length < 50;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkNamevalid) {
      setShowNotValidName(true);
      return;
    }
    if (!checkPhoneNumbervalid) {
      setShowNotValidPhoneNumber(true);
      return;
    }
    setjsonObject((prevState) => {
      return { ...prevState, phoneNumber, username: name };
    });
    navigate("/time-selection");
  };

  useEffect(() => {
    setIsNameValid(checkNamevalid());
    setIsPhoneNumberValid(checkPhoneNumbervalid());
  }, [name, phoneNumber]);

  return (
    <div className="big-card details-form-div bg-tp">
      {showNotValidName && (
        <>
          <div className="darken"></div>
          <Popup
            title="אופס"
            text="השם שהכנסתם קצר מדי"
            handleConfirm={() => setShowNotValidName(false)}
            keepCancelButton={false}
          />
        </>
      )}
      {showNotValidPhoneNumber && (
        <>
          <div className="darken"></div>
          <Popup
            title="אופס"
            text="מספר הטלפון שהכנסתם לא תקין"
            handleConfirm={() => setShowNotValidPhoneNumber(false)}
            keepCancelButton={false}
          />
        </>
      )}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="deatils-inputs phone-deatils-inputs"
          id="phone"
          placeholder="מספר טלפון"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
      </form>
      <div className="send-details-div">
        <button type="submit" onClick={handleSubmit}>
          {isNameValid && isPhoneNumberValid ? LeftArrow : LeftArrowDisabled}
        </button>
        <button>{TwoLinesRight}</button>
      </div>
    </div>
  );
}

export default DetailsForm;
