let openShopping =document.querySelector(".shoppingcart");
let closeShopping=document.querySelector(".closeshopping");
let list=document.querySelector(".list");
let listCard=document.querySelector(".listcard");
let total=document.querySelector(".total");
let body=document.querySelector("body");
let logout=document.querySelector(".logout");
const quantity=document.querySelector(".quantity");
logout.addEventListener('click', () => {
  if (confirm("Are you sure you want to log out?")) {
    window.location = "/index.html";;
  }
});
openShopping.addEventListener('click',()=>{
    body.classList.add("active")
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove("active")
})

let products =[
    {
        productName:"Regular White T-Shirt",
        category: "Topwear",
        price:700,
        image:"images (5).png"
       },
    
       {
        productName:"Beige short Skirt",
        category: "Bottomwear",
        price:300,
        image:"images (2).png"
       },
       
       {
        productName:"Sporty Smart Watch",
        category: "Watch",
        price:1000,
        image:"images (3).png"
       },
       
       {
        productName:"Basic knitted top",
        category: "Topwear",
        price:150,
        image:"images (6).png"
       },
       
       {
        productName:"Black leather Jacket",
        category: "Jacket",
        price:400,
        image:"images (7).png"
       },
       
       {
        productName:"Staylish Pink Trosers",
        category: "Bottomwear",
        price:300,
        image:"images (4).png"
       },
       
       {
        productName:"Brown Men Jacket",
        category: "Jacket",
        price:400,
        image:"images.png"
       },
       {
        productName:"comfy gray pants ",
        category: "Bottomwear",
        price:200,
        image:"images (1).png"
       },
       {
        productName:"comfy gray pants ",
        category: "Bottomwear",
        price:100,
        image:"images.png"
       },
    
]


    let listCards =[];
    const intiApp = ()=>{
        products.forEach((value,key) => {
            let newDiv =document.createElement("div");
            newDiv.classList.add("item");
            newDiv.innerHTML =
            `
            <img src="imgs/${value.image}">
            <div class="title"> ${value.productName}</div>
            <div class="category">(${value.category})</div>
            <div class="price">${value.price}L.E</div>
            <button onclick="addToCard(${key})" >Add To Card</button>
            `
            list.appendChild(newDiv)
            
        });
    }
    intiApp()

    const addToCard = (key) =>{
        if (listCards[key] == null){
            listCards[key] = products[key];
            listCards[key].quantity = 1;
        }
      

        reloadcard();
    }
        const reloadcard =()=>{
        listCard.innerHTML="";
        let count=0;
        let totalprice= 0;

        listCards.forEach((value,key) => {
            
            count+=value.quantity;
            totalprice+=parseInt(value.price*value.quantity);

            

            if(value != null){
                let newDiv =document.createElement("li");
                newDiv.innerHTML=`
                <div> <img src="imgs/${value.image}"></div>
                <div class="cardtitle"> ${value.productName}</div>
                <div class="cardprice">${value.price.toLocaleString()}</div>
                

            <div class="in"> 
               <button style ="background-color : #123fa8"
               class="cardbutton"
                onclick="changeQuantity(${key} , ${value.quantity - 1})"> - </button>
              
               <div class="count"> ${value.quantity} </div>

               <button style="background-color : #123fa8"
               class="cardbutton" 
               onclick ="changeQuantity(${key} , ${value.quantity + 1})"> + </button>
            </div> `;

                listCard.appendChild(newDiv);

            }
            total.innerText = totalprice;
            quantity.innerText=count;
        
            
        });
        
    }
   const changeQuantity= (key, quantity) => {
        if(quantity == 0){
            delete listCards[key];
            total.innerText=quantity;
            
            
           
        }else{
            listCards[key].quantity =quantity;
           
          
        }
        
        reloadcard();

    }

   
    
  
