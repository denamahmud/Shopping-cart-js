let usernameDOM = document.getElementById('username');
let emailDOM = document.getElementById('email');
let passwordDOM = document.getElementById('password');
let signUpBtn = document.getElementById('signUpBtn');


signUpBtn.addEventListener('click', function(){
    if(usernameDOM.value == "" || emailDOM.value == "" || passwordDOM.value == ""){
        alert("you have to fill fields");
    }else{

        localStorage.setItem('usernameStorage', usernameDOM.value);
        localStorage.setItem('emailStorage', emailDOM.value);
        localStorage.setItem('passwordStorage', passwordDOM.value);

        setTimeout( () => {
                    
            window.location = "logIn.html";
        }, 1500);
        
        
    }

   
});