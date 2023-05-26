import React, { useCallback, useState, useEffect, useRef } from "react";
import { useParticipantIds, useLocalParticipant, useDaily } from "@daily-co/daily-react-hooks";
import { getInstructionsPlayer } from "./../../../services/video/instructionsPlayer";
import "./Instructions.css";


// function getParticipantType() {
//   if (participantId === localParticipantId) {
//     return "local";
//   }
//   return "remote";
// }

export default function Instructions() {
  // const allParticipants = useParticipantIds();
  const localParticipant = useLocalParticipant();
  const remoteParticipantIds = useParticipantIds({ filter: 'remote' });
  const [instruction, setInstruction] = useState("");
  // const [instructionsPlayer] = useState(() => getInstructionsPlayer(setInstruction));
  const instructionsPlayerRef = useRef(getInstructionsPlayer())
  if (remoteParticipantIds.length > 0 && !instructionsPlayerRef.current.isPlayed()) {
    const otherParticipant = remoteParticipantIds[0];
    const participant = localParticipant?.user_id > otherParticipant ? 'participantA' : 'participantB';
    instructionsPlayerRef.current.play(participant, setInstruction);
  } else {
    // if (instructionsPlayerRef.current.isPlayed() && allParticipants.length < 2) {
    //   instructionsPlayerRef.current.pause();
    // }
  }
  return <div className="instructions">{instruction}</div>;
}
