import React, { useState } from "react";
import PresetFeed from "./components/presetFeed/PresetFeed";
import WaitingForPairing from "./waitingForPairing/WaitingForPairing";

function App() {
  const user = null;
  const [waiting, setWaiting] = useState(false);
  return (
    <div className="container">
      <PresetFeed setWaiting={setWaiting} />
      {waiting && <WaitingForPairing />}
    </div>
  );
}

export default App;
