const GAME_STEPS = 10; // default max number of steps in the game

class Game {
  /**
    a game of Simon can be started with a number of steps per round
    and a number of players which defaults to 1
   */
  constructor({ max = GAME_STEPS, players = 1 } = {}) {
    this._turn = 0;
    this._max = max;
    this._challenge = [];
    this._players = Array.from({ length: players }, () => new Player("user"));

    // if it's a one player game then the other player is the computer
    if (players === 1) {
      this._players.push(new Player("computer"));
    }
  }

  get players() {
    return this._players;
  }

  // players take turns
  get player() {
    return this._players[this._turn++ % this._players.length];
  }

  // answers the question, "what is the challenge right now?"
  get challenge() {
    return this._challenge;
  }

  // increments and returns the challenge
  next() {
    this._challenge.push(new Step());
    return this._challenge;
  }

  check(attempt) {
    throw new NotImplementedError(
      "the Game.check(attempt) method is not implemented"
    );
  }
}

/**
  each player in Simon is represented by a class
 */
class Player {
  constructor({ name = "Anonymous Player" } = {}) {
    this._name = name;
    this._points = 0;
  }

  get name() {
    return this._name;
  }

  set points(points = 1) {
    return (this._points += points);
  }

  get points() {
    return this._points;
  }

  addPoint() {
    return ++this._points;
  }
}

/**
  each step in Simon is represented by a class
 */
class Step {
  constructor({ color } = {}) {
    if (color) {
      if (Step.isValidColor(color)) {
        this._color = color;
      } else {
        throw new InvalidColorError(
          `Invalid color choice [${color}].  Please choose one of [${
            Step.COLORS
          }]`
        );
      }
    } else {
      this._color = getRandomItemFrom(Step.COLORS);
    }
  }

  get color() {
    return this._color;
  }

  get sound() {
    throw new NotImplementedError("the Step.sound() method is not implemented");
  }

  static isValidColor(color) {
    return !!~Step.COLORS.indexOf(color);
  }
}

Step.COLORS = ["green", "blue", "red", "yellow"];

/**
  private helper function to get random items from a collection
  https://stackoverflow.com/a/50189413
 */
function getRandomItemFrom(items) {
  return items[~~(items.length * Math.random())];
}

////////////////////////////////////////////////////////////////////////////////
// custom errors
////////////////////////////////////////////////////////////////////////////////

/**
  having custom errors is sometimes useful to make maintaining your program easier
  see: https://javascript.info/custom-errors
 */
class InvalidColorError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidColorError";
  }
}

class NotImplementedError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotImplementedError";
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// check that we're running in a Node.js context before exporting anything
if (typeof window !== "undefined") {
  module.exports = {
    Game,
    Player,
    Step,
    InvalidColorError,
    NotImplementedError
  };
}
