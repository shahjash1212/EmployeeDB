


function validation() {
    var username = document.getElementById('inputname').value;
    var email = document.getElementById('inputemail').value;
    var password = document.getElementById('inputpass').value;
    var confirmpass = document.getElementById('inputconfirmpass').value;


    var usercheck = /^[A-Za-z0-9]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9_]{3,}@[a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var passwoedcheck = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;


    
    if (usercheck.test(username)) {
        document.getElementById('usererror').innerHTML = " ";
    }
    else {
        document.getElementById('usererror').innerHTML = "** invalid Username";

        return false;
    }


    if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = " ";
    }
    else {
        document.getElementById('emailerror').innerHTML = "** invalid Email";
        return false;
    }


    if (passwoedcheck.test(password)) {
        document.getElementById('passerror').innerHTML = " ";
    }
    else {
        document.getElementById('passerror').innerHTML = "** Password is not correct";
        return false;
    }

    if(confirmpass == password){
        document.getElementById('confirmPasserror').innerHTML = " ";
    }
    else{
        document.getElementById('confirmPasserror').innerHTML = "** password is not matching"; 
        return false;
    }
 
        document.querySelector('button').addEventListener('click',()=>{

            window.location.href ="www.google.com";
        });
}