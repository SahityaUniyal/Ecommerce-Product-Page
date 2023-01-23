const ham=document.querySelector(".hamburger");
const navList=document.querySelector(".nav-list");
const cart=document.querySelector(".cart-icon");
const avatar=document.querySelector(".avatar");


ham.addEventListener("click",function(){
    // toggle navList
    navList.classList.toggle("show-nav-list");
    // rotating ham
    ham.classList.toggle("open");
});

// toggle cart
const insideCart=document.querySelector(".inside-cart");
cart.addEventListener("click",function (){
    insideCart.classList.toggle("show-cart-inside");
});
avatar.addEventListener("click",function (){
    insideCart.classList.toggle("show-cart-inside");
});


// switching image on thumbnail click
const thumbnail=document.querySelectorAll(".product-image-thumbnail picture");
const activeThumbnail=document.querySelector(".product-image-selected");
for(var i=0;i<thumbnail.length;i++)
{
    thumbnail[i].addEventListener("click",function(){
        for(var j=0;j<thumbnail.length;j++)
        {
            thumbnailImage=thumbnail[j].children[0].classList.remove("thumbnail-active");;
        }
        this.children[0].classList.add("thumbnail-active");
        var source=this.children[0].getAttribute("src");
        source=source.substring(0,22)+".jpg";
        activeThumbnail.setAttribute("src",source);
    });
}

// PRODUCT IMAGE SCALE
const imageScale=document.querySelector(".product-image");
activeThumbnail.addEventListener("click",function(){
    imageScale.classList.toggle("product-image-scale");
});



// Cart function
// item counter
const increaseCount= document.querySelector(".increaseCount");
const decreaseCount= document.querySelector(".decreaseCount");
const count=document.querySelector(".count");
var itemCount=0;
console.log(increaseCount);
console.log(decreaseCount);
decreaseCount.addEventListener("click",function(){
    itemCount--;
    updateCount();
});
increaseCount.addEventListener("click",function(){
    itemCount++;
    updateCount();
});
function updateCount(){
    count.textContent=itemCount;
}

// add to cart
var costPrice=250;
var discount=50;
var sellingPrice=costPrice-(costPrice*discount/100);

const addCart=document.querySelector(".cart");
addCart.addEventListener("click",function(){
    if(itemCount!=0)
    {
        document.querySelector(".cart-checkout").classList.remove("hidden");
        document.querySelector(".cart-empty").classList.add("hidden");
        const cartProduct=document.querySelector(".cart-list");
        cartProduct.classList.remove("hidden");
        document.querySelector(".price").textContent=sellingPrice;
        document.querySelector(".quantity").textContent=itemCount;
        document.querySelector(".total").textContent= (sellingPrice*itemCount);
    }
});

const deleteItem=document.querySelector(".delete-item");
deleteItem.addEventListener("click",function(){
    itemCount=0;
    document.querySelector(".count").textContent=0;
    document.querySelector(".cart-empty").classList.remove("hidden");
    const cartProduct=document.querySelector(".cart-list");
    cartProduct.classList.add("hidden");
    document.querySelector(".cart-checkout").classList.add("hidden");
});