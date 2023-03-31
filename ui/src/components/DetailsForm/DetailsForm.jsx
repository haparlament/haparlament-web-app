import React, { useState } from "react";
import "../../styles.css/DetailsForm.css";
import { LeftArrow } from "../../styles.css/icons.svg/icons";

function DetailsForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhone("972" + phone.substring(1));
    const formData = { name, phone };

    console.log(JSON.stringify(formData));
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
      <button type="submit" onClick={handleSubmit}>
        {LeftArrow}
      </button>
    </div>
  );
}

export default DetailsForm;
