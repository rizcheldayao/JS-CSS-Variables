'use strict';

var userInput = document.querySelectorAll('.controls input');

function handleUpdate() {
  var suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
}

userInput.forEach(function (input) {
  return input.addEventListener('change', handleUpdate);
});
userInput.forEach(function (input) {
  return input.addEventListener('mousemove', handleUpdate);
});
//# sourceMappingURL=main.js.map
