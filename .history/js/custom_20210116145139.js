function calculateLoan(){
    let loanAmount = parseInt( document.getElementById("loanAmount").value )
    let months = parseInt( document.getElementById("months").value )
    //before the very first month
    let remainingBalance = new Array()
    remainingBalance.push( loanAmount )

    //DONT FORGET TO CONVERT THIS TO A PERCENTAGE
    let interestRate = parseInt( document.getElementById("interestRate").value )

    //Keep track of interest payments 
    let interestPayment = new Array()

    //Keep track of principal payments
    let principalPayments = new Array()

    //keep track of total interest
    let totalInterest = new Array()

    //END OF DECLARATIONS*******************************************************

    //input validation to make sure interest is solid number
    if(interestRate >= 100){

    }

    //Total Monthly Payment  ***STATIC variable***                                       //(1+rate/1200)^(-NumberOfMonths)
    let totalMonthlyPayment = (loanAmount) * (interestRate/1200) / (1 -   Math.pow( (1 + interestRate/1200) , (-months) ) )


    //loop will perform 60 times meaning you will get 60 indices
    for (let i = 0; i < months; i++) {
        //Interest Payment
        interestPayment.push(  (remainingBalance) * (interestRate/1200)  ) 

        //totalInterest
        totalInterest.push( (totalMonthlyPayment) - (principalPayments) )

        //principal payment
        principalPayments.push(  totalMonthlyPayment - interestPayment  ) 
        
        remainingBalance.push( remainingBalance - principalPayments )        
    }






    //will later on be used in order to display output
    let tBody ="";
    for (let i = 0; i < months; i++) {
        tBody += `<tr> <td>${ i+1 }</td>                                                                    
                       <td>$${  (Math.round(totalMonthlyPayment * 100) / 100).toFixed(2) }</td>             
                       <td>$${  (Math.round(principalPayments[i] * 100) / 100).toFixed(2)   }</td>          
                       <td>${   (Math.round(interestPayment[i] * 100) / 100).toFixed(2) }%</td> 
                     **<td>$${  (Math.round(totalInterest[i] * 100) / 100).toFixed(2)   }</td>**
                       <td>$${  (Math.round(remainingBalance[i+1] * 100) / 100).toFixed(2)   }</td>
                 </tr>` 
    }
    document.getElementById("tBody").innerHTML = tBody


}

