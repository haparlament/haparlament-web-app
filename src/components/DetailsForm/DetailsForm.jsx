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

  // const handleSubmit = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const modPhoneNumber = "+972" + phoneNumber.substring(1);
    if (name.length < 3) {
      setShowNotValidName(true);
      return;
    }
    if (phoneNumber.length !== 10) {
      setShowNotValidPhoneNumber(true);
      return;
    }
    setjsonObject((prevState) => {
      return { ...prevState, phoneNumber, username: name };
    });
    navigate("/time-selection");
  };

  useEffect(() => {
    setIsNameValid(name.length > 3);
    setIsPhoneNumberValid(phoneNumber.length === 10);
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
          className="deatils-inputs"
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
