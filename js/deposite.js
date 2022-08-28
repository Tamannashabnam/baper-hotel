//step 1 deposite button add

document.getElementById('btn-deposite').addEventListener('click', function () {
  //console.log('deposite button click')
  // step 2:get the deposite amount from the deposite input field
  //for input field use .value to the value inside the input field
  const depositeField = document.getElementById('user-pw');
  const newdepositeAmountString = depositeField.value;
  const newdepositeAmount = parseFloat(newdepositeAmountString);
  console.log(typeof newdepositeAmount);
  //step 3:get the  current deposite total amount
  //for non-input(element other than input,textArea) use innerText get the text
  const depositeTotalElement = document.getElementById('deposite-total');
  const previousdepositeTotalString = depositeTotalElement.innerText;
  const previousdepositeTotal = parseFloat(previousdepositeTotalString);
  console.log(typeof previousdepositeTotal);


  const currentDepositeTotal = previousdepositeTotal + newdepositeAmount;
  //set the deposite total
  depositeTotalElement.innerText = currentDepositeTotal;
  //step5:get balance  current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  //step 6 calculate current balance
  const currentBalanceTotal = previousBalanceTotal + newdepositeAmount;
  //set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //step-7
  depositeField.value = '';
})

