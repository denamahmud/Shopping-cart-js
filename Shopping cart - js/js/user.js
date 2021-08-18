let logInBtn = document.getElementById('logInBtn');
let logoutBtn = document.querySelector('.log-out');
let registrationDOM = document.querySelector('.registration');
let userInfoDOM = document.querySelector('.user-info');
let getUsernameU = localStorage.getItem('usernameStorage');
let getEmailU = localStorage.getItem('emailStorage');
let getPasswordU = localStorage.getItem('passwordStorage');

(function drawUser(){
    
    if(getUsernameU && getEmailU && getPasswordU){
        registrationDOM.style.display = "none";
        userInfoDOM.style.display = "block";

    }else{
        registrationDOM.style.display = "block";
        userInfoDOM.style.display = "none";

    }

})();

logoutBtn.onclick = function(){
    
    localStorage.clear();
    noUser()

}
function noUser(){
  
    
    registrationDOM.style.display = "block";
    userInfoDOM.style.display = "none";

    setTimeout( () => {
                    
        window.location = "index.html";
    }, 1500);

}

