document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault(); 

    //Get form values

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;


//single validation

if (name === '' || email === '' || subject === ''|| message === '') {
    document.getElementById('formMessage').textContent = 'please fill in all fields';
    return;
}

// Display a success message
document.getElementById('formMessage').textContent = 'thank you for contacting us!';
document.getElementById('formMessage').style.color = 'green';

//clear the form
document.getElementById('contactForm').reset();

});



