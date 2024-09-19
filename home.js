// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault()

        // step-2 get money from input 
        const getMoney = document.getElementById('add-money-input').value;
        console.log(getMoney);

        // step-3 get the pin number validation 
        const checkPin = document.getElementById('pin-number').value;
        console.log(checkPin);
})