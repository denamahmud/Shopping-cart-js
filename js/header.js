let headerDOM = document.querySelector('.header');

headerDOM.innerHTML = `


    <div class="container">
        <div class="header-content">
            <div class="brand">
                <a href="index.html">Shopping Cart</a>
            </div>
            <div class="registration">
                <button class="sign-up"><a href="signUp.html">Sign Up</a></button>
                <button class="log-in"><a href="logIn.html">LogIn</a></button>
            </div>
            <div class="user-info">
                <span class="log-out"><i class="fas fa-sign-out-alt"></i></span>
                <span class="username"><a href="#">Dina</a></span>
                <span class="cart"><i class="fas fa-shopping-cart"></i><sup><span id="cart-counter" class="badge">0</span></sup></span>
                
                
                <div class="notifications">
                
                    <span class="view-all">View All</span>
                    <div class="products-box">
                    

                    </div>
                    
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>




`;