function calculateLoan(){
    let loanAmount = parseInt( document.getElementById("loanAmount").value )
    let months = parseInt( document.getElementById("months").value )    

    //before the very first month
    let remainingBalance = [loanAmount]

    //DONT FORGET TO CONVERT THIS TO A PERCENTAGE
    let interestRate = parseInt( document.getElementById("interestRate").value )

    //Keep track of interest payments 
    let interest = new Array()

    //Keep track of principal payments
    let principalPayments = new Array()

    //keep track of total interest
    let totalInterest = new Array()

    //Total Monthly Payment                                                         (1+rate/1200)^(-NumberOfMonths)
    let totalMonthlyPayment = (loanAmount) * (interestRate/1200) / (1 -   Math.pow( (1 + interestRate/1200) , (-months) ) )

    //END OF DECLARATIONS*******************************************************

    //input validation to make sure interest is valid number
    if(interestRate >= 100){

    }


    //loop will perform 60 times meaning you will get 60 elements for the variables declared inside
    for (let i = 0; i < months; i++) {
        //Interest 
        interest.push(  (remainingBalance[i]) * (interestRate/1200)  ) 

        //principal payment
        principalPayments.push(  totalMonthlyPayment - interest[i]  ) 

        //totalInterest
        totalInterest.push( totalInterest +(totalMonthlyPayment) - (principalPayments[i]) )
        
        remainingBalance.push( remainingBalance[i] - principalPayments[i] )        
    }



    //will later on be used in order to display output
    let tBody ="";
    for (let i = 0; i < months; i++) {
        tBody += `<tr> <td>${ i+1 }</td>                                                                    
                       <td>$${  (Math.round(totalMonthlyPayment * 100) / 100).toFixed(2) }</td>             
                       <td>$${  (Math.round(principalPayments[i] * 100) / 100).toFixed(2)   }</td>          
                       <td>${   (Math.round(interest[i] * 100) / 100).toFixed(2) }%</td> 
                       <td>$${  (Math.round(totalInterest[i] * 100) / 100).toFixed(2)   }</td>
                       <td>$${  (Math.round(remainingBalance[i+1] * 100) / 100).toFixed(2)   }</td>
                 </tr>` 
    }
    document.getElementById("tBody").innerHTML = tBody


}

