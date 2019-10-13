/**
  this file captures button clicks and stores them in an array
 */

// our system has 4 colors. let's name them as a collection (an array)
const colors = ["green", "blue", "red", "yellow"];
// our system cares about button clicks.  let's name them as a collection
const clicks = [];

// our system cares about recording clicks
function recordClick(color) {
  if(!GAME.STATUS.RUNNING) return
  clicks.push(color);
  check(clicks) // game.v1.js
  // next(clicks.length) // game.v2.js
}

const singlePlayerButton = qs("#single-player.button")
singlePlayerButton.addEventListener("click", () => {
  singlePlayerButton.classList.add("black")
  startGame()
})

qs(".massive.green.button").addEventListener("click", recordClick.bind(null, "green"))
qs(".massive.red.button").addEventListener("click", recordClick.bind(null, "red"))
qs(".massive.blue.button").addEventListener("click", recordClick.bind(null, "blue"))
qs(".massive.yellow.button").addEventListener("click", recordClick.bind(null, "yellow"))

// this just lets me print out the clicks array whenever the user clicks _anywhere_
// to help with DEBUGGING, uncomment the line of code below
// document.addEventListener("click", () => console.log(clicks));
