const checkbox = document.getElementById('check');
const menu = document.querySelector('.menu');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    menu.classList.add('visible');
  } else {
    menu.classList.remove('visible');
  }
});
