class ClickAndHold {
  /**
    * @param {EventTarget} target
    * @param {Function} callback
  */
  constructor(target, callback) {
    this.target = target;
    this.callback = callback;
    this.isHeld = false;
    this.activeHoldTimeoutId = null;

    ["mousedown", "touchstart"].forEach(type => {
      this.target.addEventListener(type, this.onHoldStart.bind(this));
    });

    ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
      this.target.addEventListener(type, this.onHoldEnd.bind(this));
    });
  }

  onHoldStart() {
    this.isHeld = true;

    this.activeHoldTimeoutId = setTimeout(() => {
      if (this.isHeld) {
        this.callback();
      }
    }, 0);
  }

  onHoldEnd() {
    this.isHeld = false;
    clearTimeout(this.activeHoldTimeoutId);
  }
}

const myButton = document.getElementById("myButton");

new ClickAndHold(myButton, () => {
  let zaddy = 0;
  while (zaddy >= 100) {
    console.log(zaddy);
    zaddy++;
  }
})
