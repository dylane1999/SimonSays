// sometimes it's nice to shorten the names of functions that we use
// for example: this line lets me shorten "document.querySelector" to just "qs"
const qs = document.querySelector.bind(document);
const qsa = document.querySelectorAll.bind(document);
// note about the above ...
// the ".bind(document)" means, "use this function _as if_ it is part of the document object"

const db = {
  players: [
    { name: "player 1", wins: 0, losses: 0 },
    { name: "player 2", wins: 0, losses: 0 }
  ]
};

function save() {
  localStorage.setItem("simon", db);
}

function load() {
  db = localStorage.getItem("simon");
}

function getUserNames() {
  let name = prompt("what's the name of player 1?");
  localStorage.setItem("player1", name);

  name = prompt("what's the name of player 2?");
  localStorage.setItem("player2", name);
}

/**
  this bit of code hides the "loading ..." overlay
 */

// milliseconds of timeout (1000 ms is 1 second)
const DIMMER_TIMEOUT = 1000;

// jQuery calls this function when the document is loaded
$(() => {
  // turn off the dimmer after a short wait
  setTimeout(doneLoading, DIMMER_TIMEOUT);
  // embed the instructional video (with console logging)
  $("#intro-video").embed({ debug: false });

  // react to the click on the "wait wat?" button
  $("#wait-wat").on("click", () => {
    // show the video
    $("#intro-video").show();
    // show the modal window
    $("#intro-modal").modal("show");

    // hide it automatically after 1 minute and 24 seconds
    // which is the length of the video
    setTimeout(() => {
      $("#intro-video").hide();
      $("#intro-modal").modal("hide");
    }, 1000 * (1 * 60 + 24));
  });
});

// helper function to stop the "loading ..." overlay
function doneLoading() {
  $(".active.dimmer").removeClass("active");
}
