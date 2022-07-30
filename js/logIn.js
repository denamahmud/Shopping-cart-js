let getUsernameU = localStorage.getItem('usernameStorage');
let getEmailU = localStorage.getItem('emailStorage');
let getPasswordU = localStorage.getItem('passwordStorage');

logInBtn.onclick = function(){

    checkDataReg()

}

function checkDataReg(){
    if(getUsernameU || getEmailU || getPasswordU){

        setTimeout( () => {
                    
            window.location = "index.html";
        }, 1500);

    }else{
        alert("Not Exist")
    }
}