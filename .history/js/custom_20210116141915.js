function calculateLoan(){
    let loanAmount = parseInt( document.getElementById("loanAmount").value )
    let months = parseInt( document.getElementById("months").value )
    //before the very first month
    let remainingBalance = loanAmount;

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



    for (let i = 0; i < months; i++) {
        //Interest Payment
        interestPayment.push(  (remainingBalance) * (interestRate/1200)  ) 

        //principal payment
        principalPayments.push(  totalMonthlyPayment - interestPayment  ) 
        
        remainingBalance -= principalPayments;
    
    
        
    }






    //will later on be used in order to display output
    let tBody ="";
    let output=["Hello","This","is","a","Test"];
    for (let i = 0; i < output.length; i+=5) {
        tBody += `<tr> <td>${i+1}</td> <td>$${  (Math.round(totalMonthlyPayment * 100) / 100).toFixed(2) }</td>
                  <td>${principalPayments[i]}</td> <td>${output[i+3]}</td> 
                  <td>${output[i+4]}</td> </tr>` 
    }
    document.getElementById("tBody").innerHTML = tBody


}

