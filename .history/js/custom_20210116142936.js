function calculateLoan(){
    let loanAmount = parseInt( document.getElementById("loanAmount").value )
    let months = parseInt( document.getElementById("months").value )
    //before the very first month
    let remainingBalance = new Array()
    remainingBalance.push( loanAmount )

    //DONT FORGET TO CONVERT THIS TO A PERCENTAGE
    let interestRate = parseInt( document.getElementById("interestRate").value )

    //Keep track of interest payments 
    let interestPayment = new Array();

    //Keep track of principal payments
    let principalPayments = new Array();

    //END OF DECLARATIONS*******************************************************

    //input validation to make sure interest is solid number
    if(interestRate >= 100){

    }

    //Total Monthly Payment  ***STATIC variable***                                       //(1+rate/1200)^(-NumberOfMonths)
    const totalMonthlyPayment = (loanAmount) * (interestRate/1200) / (1 -   Math.pow( (1 + interestRate/1200) , (-months) ) )


    //loop will perform 60 times meaning you will get 60 indices
    for (let i = 0; i < months; i++) {
        //Interest Payment
        interestPayment.push(  (remainingBalance) * (interestRate/1200)  ) 

        //principal payment
        principalPayments.push(  totalMonthlyPayment - interestPayment  ) 
        
        remainingBalance.push( remainingBalance - principalPayments)        
    }






    //will later on be used in order to display output
    let tBody ="";
    for (let i = 0; i < months; i+=5) {
        tBody += `<tr> <td>${ i+1 }</td> <td>$${  (Math.round(totalMonthlyPayment * 100) / 100).toFixed(2) }</td>
                  <td>${ principalPayments[i] }</td> <td>${ interestPayment[i] }</td> 
                  <td>${ remainingBalance[i+1] }</td> </tr>` 
    }
    document.getElementById("tBody").innerHTML = tBody


}

