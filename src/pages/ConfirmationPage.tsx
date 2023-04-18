import React from 'react'
import { useNavigate } from "react-router-dom";


function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div className="small-card">
      <div className="instructions-header-div">
        <h1>הפרטים התקבלו!</h1>
        <h3>רוצים להגיב על תמונות נוספות?</h3>
      </div>
      <div className="instructions-div">

      </div>
      <div className="instructions-bottom">
        <button onClick={() => navigate("/emotions-selection")
        } className="instructions-button">
          קדימה
        </button>
      </div>
    </div>
  )
}

export default ConfirmationPage
