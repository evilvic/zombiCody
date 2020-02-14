document.addEventListener('DOMContentLoaded', () => {

  axios.get('/auth/getStatus').then(({data:{correctQuestions}}) => correctQuestions.forEach(element => {
    document.getElementById(`${element}`).style.backgroundColor = "rgb(150, 255, 226)"
  }))
  axios.get('/auth/getStatus').then(request => {
    
    if (request.data.role != 'teacher') {
      document.querySelector('#create-course-teacher').style.display = 'none'
    }

  })


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
  const $emailLabel2 = document.querySelector('label[for="email2"]')
  const $emailInput = document.querySelector('input[name="email"]')
  const $usernameLabel = document.querySelector('label[for="username"]')
  const $usernameInput = document.querySelector('input[name="username"]')
  const $passwordLabel = document.querySelector('label[for="password"]')
  const $passwordInput = document.querySelector('input[name="password"]')
  const $submitInput = document.querySelector('input[type="submit"]')

  const $roleLabel = document.querySelector('label[for="role"]')
  const $roleSelect = document.querySelector('select[name="role"]')



  if($birthdayInput.value != "") {

    let dateOfBirth = new Date($birthdayInput.value)
    let ageDifMs = Date.now() - dateOfBirth.getTime()
    let ageDate = new Date(ageDifMs)
    let age = Math.abs(ageDate.getUTCFullYear() - 1970)

    if(age >= 18) {
      $emailLabel2.style.display = "flex"
      $emailLabel.style.display = "none"
      $roleLabel.style.display = "flex"
      $roleSelect.style.display = "flex"

      $birthdayLabel.style.display = "none"
    $birthdayInput.style.display = "none"

    } else {
      $emailLabel2.style.display = "none"
      $emailLabel.style.display = "flex"
      $roleLabel.style.display = "none"
      $roleSelect.style.display = "none"

      $birthdayLabel.style.display = "none"
    $birthdayInput.style.display = "none"
    }

    $birthdayLabel.style.display = "none"
    $birthdayInput.style.display = "none"

    $validationButton.style.display = "none"
  
    $emailInput.style.display = "flex"
    $usernameLabel.style.display = "flex"
    $usernameInput.style.display = "flex"
    $passwordLabel.style.display = "flex"
    $passwordInput.style.display = "flex"
    $submitInput.style.display = "flex"

  }
}





