var now = new Date(),
hours = now.getHours();

if(hours >= 8 && hours <=17 ){
    document.getElementById('but').style.display='block'

}else     document.getElementById('but').style.display='none'



const tel = document.getElementById('tel')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('but', (e) => {
  let messages = []
  if (tel.value === '' || tel.value == null) {
    messages.push('tel is required')
  }

  if (email.value.length <= 6) {
    messages.push('email must be longer than 6 characters')
  }

  if (email.value.length >= 20) {
    messages.push('email must be less than 20 characters')
  }

  if (email.value === 'email') {
    messages.push('email cannot be email')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})


