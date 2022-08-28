/**
 1.add event handler with the withdrow button 
 2.get the writhdrow amount in the  withdrowinput field
 3.get previous wd total
4.calculate total wd amount
 5. set wdtotal amount 
 6.get the previous balance total
 6.5 set the new balance total

 */
//step1
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // console.log('click')
  //step2
  const withdrowField = document.getElementById('user-tk');
  const newwdAmountString = withdrowField.value;
  const newwdAmount = parseFloat(newwdAmountString);
  //console.log(newwdAmount);

  //step 3
  const wdElement = document.getElementById('wd-total');
  const previouswdTotalString = wdElement.innerText;
  const previouswdTotaltotal = parseFloat(previouswdTotalString);
  console.log(previouswdTotaltotal);
  //step4
  const currentwdTotal = previouswdTotaltotal + newwdAmount;
  wdElement.innerText = currentwdTotal;
  //step 5
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  console.log(previousBalanceTotal);
  //step 6
  const newBalanceTotal = previousBalanceTotal - newwdAmount;
  balanceTotalElement.innerText = newBalanceTotal;



})
