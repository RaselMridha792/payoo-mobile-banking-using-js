document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        // step-1: get the amount and pin number 
        const cashOutAmount = document.getElementById('Cash-Out-input').value;
        const cashOutNumber = parseFloat(cashOutAmount);

        // step-2: get the pin Number 
        const cashOutPin = document.getElementById('cash-out-pin-number').value;

        // step-3: validate the pin number 
        if(cashOutPin === '9099'){
            
            // step-4: get the total amount
            const totalAmount = document.getElementById('account-balance').innerText;
            const totalAmountNumber = parseFloat(totalAmount);

            // step-5: drease the amount while cashout 
            const totalBalance = totalAmountNumber - cashOutNumber;

            // step-6: update the balance 
            document.getElementById('account-balance').innerText = totalBalance;
        }
        else{
            alert('wrong pin! cash out failed.');
        }
    })