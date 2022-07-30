let myProductsContainer = document.querySelector('.my-products-container');
let totalDOM = document.getElementById('total')
let quantityDOM = document.getElementById('quantity');

function drawProductsInViewAll(allProducts = []){
 

    
    let my_products = JSON.parse(localStorage.getItem('products-in-storage') || allProducts)
    
    let productsUI = my_products.map(function(item){
        return `

        
        
            <div class="col-xs-12">
               
                <div class="my-products-content">
                    <div class="myP-style">
                        <h3 class="my-product-title">${item.title}</h3>
                    </div>
                    <div class="myP-style">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="myP-style price-style">
                        <p>${item.price}$</p>
                    </div>
                    
                    <div class="myP-style">
                        <button class="remove-from-cart" onclick="removeFromCart(${item.id})">remove from cart</button>
                        
                    </div>
                   
                

                </div> 
            </div>
         
           
               
        `;

    }).join('\n');

 
    myProductsContainer.innerHTML += productsUI;
  
}

drawProductsInViewAll();








function removeFromCart(id){

    let getItemsFromStorage = JSON.parse(localStorage.getItem('products-in-storage'));
    if(getItemsFromStorage){

        
        let getItem = getItemsFromStorage.filter((ele) => {
             return ele.id != id
        });

        localStorage.setItem('products-in-storage', JSON.stringify(getItem))
  
   
        window.location = "view_products.html";
    }


    checkIfEmptyStorage()


}
function checkIfEmptyStorage(){
    let getItemsFromStorage = JSON.parse(localStorage.getItem('products-in-storage'));
    if(!getItemsFromStorage){
        console.log("there is no products selected")
        myProductsContainer.innerHTML = "<p>there is no products selected</p>";
    }
    

}


function totalFun(){
    

    let getItemsFromStorage1 = JSON.parse(localStorage.getItem('products-in-storage'));

    if(getItemsFromStorage1){
        let total = 0;
        let getPrice = [];

        for(i = 0 ; i < getItemsFromStorage1.length ; i++){


            getPrice = parseInt(getItemsFromStorage1[i].price);
            total += getPrice;

        }

        totalDOM.innerHTML = `

             <button class="pay-btn">Pay <span class="tq-style">${total}$</span></button>
            

        `;
    }
    
  
}

function quantityFun(){
    let getItemsFromStorage = JSON.parse(localStorage.getItem('products-in-storage'));
    if(getItemsFromStorage){
        let quaDOM = getItemsFromStorage.length;
        quantityDOM.innerHTML = `
        
            Quantity Is <span class="tq-style">${quaDOM}</span>

            
        `;
     
    }
}

totalFun()
quantityFun()


let removeBtn = document.querySelectorAll(".remove-from-cart");

function checkRepeatedProducts(){

    let getItemsFromStorage = JSON.parse(localStorage.getItem('products-in-storage'));
    if(getItemsFromStorage){

        let chosenProduct = getItemsFromStorage.filter( function(item){
            return  console.log(item.id);
            if(item.id === item.id){
                return console.log("repeated")
            }
        })

    }

}

checkRepeatedProducts()