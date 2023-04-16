import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css/DetailsForm.scss";
import { LeftArrow } from "../../styles.css/icons.svg/icons";
import { TwoLinesRight } from "../../styles.css/icons.svg/icons";
import { useDispatch } from 'react-redux';
import {
  setSession
} from './../../stateManagement/modules/sessionSubscription/sessionSubscriptionSlice';
function DetailsForm({ setSlide, slide }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhone("972" + phone.substring(1));
    dispatch(setSession({
      phoneNumber: phone, userName: name
    }));
    setSlide(slide + 1);
    navigate("/time-selection");
  };

  return (
    <div className="big-card details-form-div bg-tp">
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
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
