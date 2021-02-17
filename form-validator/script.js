const form = document.querySelector('#form')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const messageContainer = document.querySelector('.message-container')
const message = document.querySelector('#message')

let isValid = false

function validateForm() {
  isValid = form.checkValidity()
  console.log(isValid)
  if (!isValid) {
    message.textContent = 'Please fill out all fields.'
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
    return
  }
  if (password.value === password2.value) {
    passwordMatch = true
    password.style.borderColor = 'green'
    password2.style.borderColor = 'green'
  } else {
    passwordMatch = false
    message.style.css = 'red'
    message.textContent = 'Make sure passwords match.'
    password.style.borderColor = 'red'
    password2.style.borderColor = 'red'
    return
  }
  if (isValid && passwordMatch) {
    message.textContent = 'Successfully Registered!'
    message.style.color = 'green'
    messageContainer.style.borderColor = 'green'
  }
}

function processFormData(e) {
  e.preventDefault()
  // console.log(e)
  validateForm()
}

form.addEventListener('submit', processFormData)
