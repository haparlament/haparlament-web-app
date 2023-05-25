import React, { useCallback, useState, useEffect, useRef } from 'react';
import {
  useParticipantIds,
} from '@daily-co/daily-react-hooks';


import './Instructions.css';
function InstructionsPlayer({ onInstructionChange }) {
  let _callStarted = false;
  let _time = 0;
  let _interval = null;
  const callInstructionsScript = {
    1: {
      text: 'Welcome to the meeting!',
    },
    5: {
      text: 'Please introduce yourself!',
    },
    10: {
      text: 'The topic of the meeting is...',
    },
    20: {
      text: 'Participant 1, please state your opinion',
    },
    30: {
      text: 'Participant 2, please state your opinion',
    },
    40: {
      text: 'Meeting is over, thank you for your participation!',
    }
  }
  return {
    play: () => {
      console.log('play');
      if (!_callStarted) {
        _callStarted = true;
        _interval = setInterval(() => {
          _time+=1;
          console.log('tick', _time)
          if (callInstructionsScript[_time]) {
            console.log('script', callInstructionsScript[_time].text);
            onInstructionChange(callInstructionsScript[_time].text)
          }
        }, 1000);

      }
    },
    pause: () => {
      // TODO allow to resume call instructions from the point where it was paused
      console.log('pause');
      if (_callStarted) {
        _callStarted = false;
        clearInterval(_interval);
      }
    },
    // TODO add stop function
    isPlayed: () => {
      return _callStarted;
    } 
  }
}
export default function Instructions() {
  const [instruction, setInstruction] = useState('');
  let instructionsPlayer = useRef(new InstructionsPlayer({ onInstructionChange: setInstruction }));

  const allParticipants = useParticipantIds();
  console.log('allParticipants', allParticipants);
  if (allParticipants.length > 1 && !instructionsPlayer.current.isPlayed()) {
    instructionsPlayer.current.play();
  } else {
    if (instructionsPlayer.current.isPlayed() && allParticipants.length < 2) {
      instructionsPlayer.current.pause();
    }
  }
  return (
    <div className="instructions">
      {instruction}
    </div>
  );
}
