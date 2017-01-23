state = {
  active: "player1",
  player1Score: 0,
  player2Score: 0,
  turnScore: 0,
  turnCount: 1
}

const roll = () => Math.floor(Math.random()*6) + 1;

const togglePlayer = state => {
  if (state.active === "player1") {
    state.active = "player2";
  } else {
    state.active = "player1";
  }
}

const addScore = (state) => {
  if (state.active === "player1") {
    state.player1Score += state.turnScore;
  } else {
    state.player2Score += state.turnScore;
  }
  state.turnScore = 0;
}

const renderRollValue  = () => {

}

const initateButtonHandlers = state => {
  $("roll").on("click", () => {

      state.turnCount ++;
      const rollValue = roll();

      if (rollValue === 1) {
        state.turnScore = 0;
        togglePlayer();
      } else {
        state.turnScore += rollValue;
      }

      renderRollValue();

      if (state.turnCount === 3) {
        addScore(state);
        togglePlayer();
      }
    });

    $("hold").on("click", () => {
      addScore(state);
      togglePlayer();
    });
}
