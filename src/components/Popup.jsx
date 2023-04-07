import React from "react";
import "../styles.css/Popup.css";

function Popup({ title, text, handleConfirm, handleCancel, keepCancelButton }) {
  return (
    <div className="popup">
      <h4 className="popup-header">{title}</h4>
      <p className="popup-text">{text}</p>
      <div className="popup-buttons">
        <button className="popup-button bold" onClick={handleConfirm}>
          אישור
        </button>
        {keepCancelButton && (
          <button className="popup-button" onClick={handleCancel}>
            ביטול
          </button>
        )}
      </div>
    </div>
  );
}

export default Popup;
