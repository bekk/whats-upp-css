var inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
  document.documentElement.style.setProperty(`--${this.id}`, e.target.value);
}