function calculateLoan(){
    let loanAmount = parseInt( document.getElementById("loanAmount").value )
    let months = parseInt( document.getElementById("months").value )
    //DONT FORGET TO CONVERT THIS TO A PERCENTAGE
    let interestRate = parseInt( document.getElementById("interestRate").value )

    //input validation to make sure interest is solid number
    if(interestRate >= 100){

    }

    //Total Monthly Payment                                                           //(1+rate/1200)^(-NumberOfMonths)
    let totalMonthlyPayment = (loanAmount) * (interestRate/1200) / (1 -   Math.pow( (1 + interestRate/1200) , (-months) ) )

    let remainingBalance = loanAmount;

    //Interest Payment
    let interestPayment = (remainingBalance) * (interestRate/1200)

    //principal payment
    let principalPayment = totalMonthlyPayment - interestPayment
    
    remainingBalance =
    
    


    //will later on be used in order to display output
    


}

