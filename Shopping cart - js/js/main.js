let mainProductsDOM = document.querySelector('.main .container .row .products-content');
let mainDOM = document.querySelector('.main');
let cartCounterDOM = document.getElementById('cart-counter');
let viewAll = document.querySelector('.view-all');
let notifications = document.querySelector('.user-info .notifications');
let cartBtn = document.querySelector('.cart');
let noProducts = document.querySelector('.main .no-products')
let counter = 0;
let getUsername = localStorage.getItem('usernameStorage');
let getEmail = localStorage.getItem('emailStorage');
let getPassword = localStorage.getItem('passwordStorage');
let headerMainDOM = document.querySelector('.header');

let brandDOM = document.querySelector('.brand a');
let addedProducts = [];




function checkUserBeforeDraw(){
    
    if(getUsername && getEmail && getPassword){
        noProducts.style.display = "none";
        mainProductsDOM.style.display = "block";
        mainDOM.style.background = "none";
        mainDOM.style.height = "auto";
        mainDOM.style.backgroundColor = "#e6e6e6";
        mainDOM.style.paddingTop = "100px";
        headerMainDOM.style.zIndex = "1000";
      
    }
    else{

        noProducts.style.display = "block";
        mainProductsDOM.style.display = "none";
        mainDOM.style.background = "block"
    
        
    }

}

function drawProducts(){

  
        checkUserBeforeDraw()
        let productUI = products.map(function(item){
            return `
                <div class="col-lg-4 col-md-6 col-xs-12">
                   
                        <div class="product">
                        
                            <img src="${item.img}" alt="image">
                            <h3 class="title-product">${item.title}</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Price <span>${item.price}$</span></p>
                            <button class="add-to-cart" onclick="addToCart(${item.id})"><i class="fas fa-shopping-cart"></i> add to cart</button>
                        </div>
                    
                </div>
        
                `
        
            }).join('\n');
        
            mainProductsDOM.innerHTML = productUI;

    
}
drawProducts()



// add to cart button

function addToCart(id){

   
   
   counter++;
   cartCounterDOM.innerHTML = counter;

   cartCounterDOM.style.display = "block";
   
   let chosenItem = products.find( (item) => item.id == id);

 

  
   let productsBox = document.querySelector('.products-box');

 

  (function drawList(){

    productsBox.innerHTML += `
        <div class="products-box-content">
            <h3 class="title-product">${chosenItem.title}</h3>
            <span class="price-product">Price : ${chosenItem.price}$</span>
            
        </div>

    `
    
  })();

  addedProducts = [...addedProducts, chosenItem]
  localStorage.setItem('products-in-storage', JSON.stringify(addedProducts))
  
   if(productsBox.children.length > 3){
       
      
       viewAll.style.display = "block";
       notifications.style.maxHeight = '380px';
       notifications.style.overflow = 'hidden';
 
     
    
   }


}


// disabled click button when selected it

let addToCartBtn = document.querySelectorAll(".add-to-cart")

for(let i = 0 ; i < addToCartBtn.length ; i++){
    addToCartBtn[i].addEventListener("click", function(){


        this.style.pointerEvents = "none";
        this.parentElement.style.cursor = "no-drop";
        this.style.backgroundColor = "#fd9e75";
        this.style.color = "#ffffff";
        this.style.border = "2px solid #ffffff";
        this.innerHTML = "In Cart";
 
    })
    

}

viewAll.onclick = function(){

    window.location = "view_products.html"

}

let usernameHeader = document.querySelector('.username');
usernameHeader.addEventListener('click', function(){
    window.location = 'view_products.html';

})


cartBtn.onclick = function(){

    let productsStorage = JSON.parse(localStorage.getItem('products-in-storage'));

    if(productsStorage){
        
        if(notifications.style.display == 'none'){
            notifications.style.display = 'block';
            notifications.style.background = '#16635b';
            
        }else{
            notifications.style.display = 'none';
            notifications.style.background = 'none';
            

        }

    }
}
