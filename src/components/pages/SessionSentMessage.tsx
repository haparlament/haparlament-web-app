import "../../styles.css/SessionSentMessage.scss"
import { SuccessIcon } from "../../styles.css/icons.svg/icons";
function SessionSentMessage() {

  return (
    <div className="big-card details-form-div full-screen-mode">
      <div className="icon-container">
        {SuccessIcon}        
      </div>
      <div className="session-sent-message-headers">
        <h2>נרשמת!</h2>
        <h4>בקרוב ניצור איתך קשר בוואטסאפ ונקשר אותך לשיחה עם אדם עם תחושות שונות בנושא שבחרת</h4>
      </div>
    </div>
  );
}

export default SessionSentMessage;
