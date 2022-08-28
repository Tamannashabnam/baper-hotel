//step -1 :add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
  console.log('submit button clicked');

  //step:2- get the email address inside the email input field
  //always remember to use.value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  //step 3:get password
  //set id on the html element
  //get the element
  //get the value from the element
  const pwField = document.getElementById('user-pw');
  const pw = pwField.value;
  //console.log(email, pw);
  //Do not varify email pw on the client side
  //step:4 :verify email and pw
  if (email == 'tt@tt.com' && pw == 'ttt') {
    //console.log('valid')
    window.location.href = 'bank.html';
  }
  else {
    // console.log('invalid')
    alert('invalid')
  }
})

