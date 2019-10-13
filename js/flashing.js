/**
  this function flashes a button on the page

  usage:
    flash("green")
    flash("blue")
    flash("red")
    flash("yellow")

  @param color the color of the button to flash
 */
function flash(color) {
  // console.log(`flashing [${color}]`);

  const timeout = 150                                 // milliseconds to wait
  const button = getButton(color)                     // get a hold of the button

  change(button)                                      // change the button somehow
  setTimeout(() => restore(button), timeout)          // restore the button after timeout

  /**
    helper function to get a reference to the button
    @param clr the color of the button to get
   */
  function getButton(clr) {
    return document.querySelector(`.massive.${clr}.button`)
  }

  /**
    helper function to change a button
    @param btn the button being changed
   */
  function change(btn) {
    btn.classList.add("basic")
  }

  /**
    helper function to restore a button
    @param btn the button being restored
   */
  function restore(btn) {
    btn.classList.remove("basic")
  }
}
