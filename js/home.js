// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault()

        // step-2 get money from input 
        const getMoney = document.getElementById('add-money-input').value;

        // step-3 get the pin number validation 
        const checkPin = document.getElementById('pin-number').value;
        if(checkPin === '9099'){

            // step-4 get the current balance 
            const currentBalance = document.getElementById('account-balance').innerText;

            // convert the string to number input and available balances
            const currentBalanceNumber = parseFloat(currentBalance);
            const getMoneyNumber = parseFloat(getMoney);

            // step-5: update the balance amount 
            const updatedBalance = currentBalanceNumber + getMoneyNumber;

            // step-6: update the balance to the ui 
            document.getElementById('account-balance').innerText = updatedBalance;
        }
        else{
            alert('sorry! wrong pin number')
        }
})