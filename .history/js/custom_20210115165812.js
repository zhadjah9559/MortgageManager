function calculateLoan(){
    let loanAmount = parseInt( document.getElementById("loanAmount").value )
    let months = parseInt( document.getElementById("months").value )
    //DONT FORGET TO CONVERT THIS TO A PERCENTAGE
    let interestRate = parseInt( document.getElementById("interestRate").value )

    //input validation to make sure interest is solid number
    if(interestRate >= 100){

    }

    //Total Monthly Payment ALGO*******************

    let totalMonthlyPayment = (loanAmount) * (interestRate/1200) (1 - (1) )

    //Total Monthly Payment ALGO*******************


}

