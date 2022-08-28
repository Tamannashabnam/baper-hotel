/**
 1.add event handler with the withdrow button 
 2.get the writhdrow amount in the  withdrowinput field
 3.get previous wd total

 * 
 */
//step1
document.getElementById('btn-withdraw').addEventListener('click', function () {
  console.log('click')
  //step2
  const withdrowfield = document.getElementById('user-tk');
  const newwdAmountString = withdrowfield.value;
  const newwdAmount = parseFloat(newwdAmountString);
  console.log(newwdAmount);

  //step 3
  const wdElement = document.getElementById('wd-total');
  const previouswdTotalString = wdElement.innerText;
  const previouswdTotaltotal = parseFloat(previouswdTotalString);
  console.log(previouswdTotaltotal);
})