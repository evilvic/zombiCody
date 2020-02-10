document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const showMenu = () => {
  const $bars = document.querySelector('#menu')
  if ($bars.style.display === 'flex') {
      $bars.style.display = 'none'
  } else {
      $bars.style.display = 'flex'
  }
}
