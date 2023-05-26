class InstructionsPlayer {
  _callStarted = false;
  _time = 0;
  _interval: any;
  _participant: string = "";
  _callInstructionsScript: any = {
    1: {
      both: "Welcome to the meeting!",
    },
    5: {
      both: "Please introduce yourself!",
    },
    10: {
      both: "The topic of the meeting is...",
    },
    20: {
      participantA: "<Participant A>, please state your opinion",
      participantB: "Its <Participant A>'s turn to speak",
    },
    30: {
      participantB: "<Participant B>, please state your opinion",
      participantA: "Its <Participant B>'s turn to speak",
    },
    40: {
      both: "Meeting is over, thank you for your participation!",
    },
  };

  play(participant: string, onInstructionChange: (newText: string) => {}) {
    console.log("play with participant: ", participant);
    this._participant = participant;
    if (!this._callStarted) {
      this._callStarted = true;
      this._interval = setInterval(() => {
        console.log("interval", this._time);
        this._time += 1;
        if (this._callInstructionsScript[this._time]) {
          if (this._callInstructionsScript[this._time].both) {
            console.log(
              "changing instruction to:",
              this._callInstructionsScript[this._time].both
            );
            onInstructionChange(this._callInstructionsScript[this._time].both);
            return;
          }
          if (this._callInstructionsScript[this._time][this._participant]) {
            console.log(
              "changing instruction to:",
              this._callInstructionsScript[this._time][this._participant]
            );
            onInstructionChange(
              this._callInstructionsScript[this._time][this._participant]
            );
            return;
          }
        }
      }, 1000);
    }
  }
  pause() {
    // TODO allow to resume call instructions from the point where it was paused (should be done on both sides)
    console.log("pause");
    if (this._callStarted) {
      this._callStarted = false;
      clearInterval(this._interval);
    }
  }
  // TODO add stop function
  isPlayed() {
    return this._callStarted;
  }
}

let instance: InstructionsPlayer | null = null;

export function getInstructionsPlayer() {
  if (!instance) instance = new InstructionsPlayer();
  return instance;
}
