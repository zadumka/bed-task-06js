const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', (e) => {
  span.setAttribute('style', `font-size: ${e.target.value}px`);
});
