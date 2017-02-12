const userInput = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

userInput.forEach(input => input.addEventListener('change',handleUpdate));
userInput.forEach(input => input.addEventListener('mousemove',handleUpdate));