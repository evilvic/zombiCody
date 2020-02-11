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

const register = () => {

  const $birthdayLabel = document.querySelector('label[for="birthday"]')
  const $birthdayInput = document.querySelector('input[name="birthday"]')

  const $validationButton = document.querySelector('#validation')

  const $emailLabel = document.querySelector('label[for="email"]')
  const $emailInput = document.querySelector('input[name="email"]')
  const $usernameLabel = document.querySelector('label[for="username"]')
  const $usernameInput = document.querySelector('input[name="username"]')
  const $passwordLabel = document.querySelector('label[for="password"]')
  const $passwordInput = document.querySelector('input[name="password"]')
  const $submitInput = document.querySelector('input[type="submit"]')



  if($birthdayInput.value != "") {

    $birthdayLabel.style.display = "none"
    $birthdayInput.style.display = "none"

    $validationButton.style.display = "none"
  
    $emailLabel.style.display = "flex"
    $emailInput.style.display = "flex"
    $usernameLabel.style.display = "flex"
    $usernameInput.style.display = "flex"
    $passwordLabel.style.display = "flex"
    $passwordInput.style.display = "flex"
    $submitInput.style.display = "flex"

  }
}
