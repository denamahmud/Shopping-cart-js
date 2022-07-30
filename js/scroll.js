let headerMainDOMSc = document.querySelector('.header');

window.onscroll = function(){
    if(scrollY > 100){
        headerMainDOMSc.classList.add('header-style');
        headerMainDOMSc.style.transition = ".3s background, .3s padding";
   

    }else{
        headerMainDOMSc.classList.remove('header-style');
        headerMainDOMSc.style.transition = "none";
    }
}