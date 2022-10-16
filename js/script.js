var a = 0

function mouseOver () {
  const name = document.forms['formSubmit']['name'].value
  const email = document.forms['formSubmit']['email'].value
  const password = document.forms['formSubmit']['password'].value
  const tick = document.querySelector('#check')

  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if ((name == '' || !email.match(emailCheck) || password == '' || tick.checked == false) && a == 0) {
    buttonMoveLeft()
    a = 1
    return false
  }

  if ((name == '' || !email.match(emailCheck) || password == '' || tick.checked == false) && a == 1) {
    buttonMoveRight()
    a = 2
    return false
  }

  else if ((name == '' || !email.match(emailCheck) || password == '' || tick.checked == false) && a == 2) {
    buttonMoveLeft()
    a = 1
    return false
  }else {

    // document.getElementById('subBtn').click();
    document.getElementById('subBtn').style.cursor = 'pointer'
    return false
  }
}



function buttonMoveLeft () {
  const button = document.getElementById('subBtn')
  button.style.transform = 'translateX(-160%)'
}

function buttonMoveRight () {
  const button = document.getElementById('subBtn')
  button.style.transform = 'translateX(0%)'
}

function resetBtn () {
  const button = document.getElementById('subBtn')
  button.style.transform = 'translateX(0%)'
}
