// step 1 set event handler 
document.getElementById('button-login').addEventListener('click', function(event){
    // prevent default behavior 
    event.preventDefault();

    // step 3 get the phone number 
    const phoneNumber = document.getElementById('phone-number').value;

    // step 4 get the pin number
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
    if((phoneNumber === '01645072790') && (pinNumber === '9099')){
        window.location.href = './home.html';
    }
    else{
        alert('sorry wrong pin number or phone number');
    }
})