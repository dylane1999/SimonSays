const GAME = {
  COLORS: ["green", "blue", "red", "yellow"],
  SPEED: {
    HI: 10,
    LO: 2
  },
  STATUS: {
    RUNNING: undefined,
    PAUSED: undefined
  },
  STEPS: [],
  MAX_STEPS: 3
};

function startGame() {
  console.log("starting game ...");
  GAME.STATUS.RUNNING = true;
  GAME.STATUS.PAUSED = false;
  nextStep();
}

function nextStep() {
  addStep();
  showChallenge();
  debug(GAME);
}

function addStep() {
  GAME.STEPS.push(randomColor(GAME.COLORS));
}

function showChallenge() {
  const delay = 500;
  GAME.STEPS.forEach((step, index) => {
    // setTimeout(() => flash(step), delay * (index + 1));
    setTimeout(() => {
      playSoundFor(step);
      flash(step);
    }, delay * (index + 1));
  });
  GAME.STATUS.PAUSED = true;
}

function check(userClicks) {
  GAME.STATUS.PAUSED = true;
  const userSteps = userClicks.length;
  const correct = areEqual(userClicks, GAME.STEPS.slice(0, userSteps));

  if (!correct) {
    gameOver(`you missed the ${englishify(userSteps)} step`);
    return;
  }

  GAME.STATUS.PAUSED = false;
  if (userSteps < GAME.STEPS.length) return;

  if (userSteps < GAME.MAX_STEPS) {
    clicks.length = 0;
    nextStep();
  } else {
    gameOver();
  }
}

function gameOver(message = "you won!") {
  GAME.STATUS.RUNNING = false;
  rainConfetti_v1();
  // rainConfetti_v2();
  announce(`<h1>Game Over</h1><br><br><h2>${message}</h2>`);
  console.log(`game over: ${message}`);
}

function areEqual(user, puter) {
  return JSON.stringify(user) === JSON.stringify(puter);
}

function randomColor(colors) {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function announce(message) {
  // prettier-ignore
  document.querySelector('#announcements').innerHTML = message
}

function debug(json) {
  // prettier-ignore
  document.querySelector('#debug').innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`
}

function englishify(number) {
  switch (number % 10) {
    case 1:
      return `${number}st`;
      break;
    case 2:
      return `${number}nd`;
      break;
    case 3:
      return `${number}rd`;
      break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      return `${number}th`;
    default:
      console.log(`number: [${number}]`);

      return "WAT?";
      break;
  }
}

const sounds = {
  green: qs("#sound-1"),
  blue: qs("#sound-2"),
  red: qs("#sound-3"),
  yellow: qs("#sound-4")
};

function playSoundFor(color) {
  sounds[color].play();
}


function rainConfetti_v1() {
  const settings = {
    max: 100,
    clock: 30,
    target: "simon-canvas",
    props: ["square", "triangle", "line"],
    colors: [[80, 80, 80]]
  };

  new ConfettiGenerator(settings).render();
}

function rainConfetti_v2() {
  confetti();
}
