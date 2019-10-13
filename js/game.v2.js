/**
  Simon is a memory game

  the mode being modeled here requires the user to recall a series of button
  presses (the CHALLENGE) until they reach the end of the series correctly
  or make a mistake along the way, whichever comes first

 */
const GAME = {
  COLORS: ["green", "blue", "red", "yellow"],
  STATUS: {
    RUNNING: undefined,
    PAUSED: undefined
  },
  DIFFICULTY: {
    EASY: 4,
    HARD: 10
  },
  STEPS: {
    CURRENT: 0,
    CHALLENGE: []
  }

};

function startGame() {
  GAME.STATUS.RUNNING = true;
  console.log("starting the game!");
  next(0);
}

function next(attempt) {
  console.log(`attempt: ${attempt}`);

  if (GAME.STATUS.RUNNING) {
    if (userIsDone(attempt)) {
      turnFor("computer");
      turnFor("user");
    } else {
      console.log("user is still playing");
    }
  }

  if (!GAME.STATUS.RUNNING) throw new Error("the game not running");
}

function turnFor(user) {
  let won = false;

  switch (user) {
    case "computer":
      let challenge = getChallengeFor(++GAME.STEPS.CURRENT); // make a new challenge
      challenge.map((color, index) => delayedFlash(color, index)); // render the challenge
      break;
    case "user":
      GAME.STATUS.PAUSED = true;
      clicks.length = 0;
      break;
    default:
      console.log(`invalid turn for [${user}]`);
      break;
  }

  if (GAME.STEPS.CURRENT === GAME.DIFFICULTY.EASY + 1) {
    const message = won ? "you won!" : "try again ...";
    return endGame(message);
  }
}

function getChallengeFor(step) {
  GAME.STEPS.CHALLENGE.push(randomColor())
  return GAME.STEPS.CHALLENGE
  // return Array.from({ length: step }, randomColor); // this makes a new pattern
}

function userIsDone(clicking) {
  return clicking === GAME.STEPS.CURRENT;
}

function endGame(message) {
  GAME.RUNNING = false;
  console.log(message);
}

function delayedFlash(color, scale) {
  let delay = 500;
  setTimeout(() => flash(color), delay * scale);
}

function randomColor() {
  return getRandomItemFrom(GAME.COLORS);

  // https://stackoverflow.com/a/50189413
  function getRandomItemFrom(items) {
    return items[~~(items.length * Math.random())];
  }
}
