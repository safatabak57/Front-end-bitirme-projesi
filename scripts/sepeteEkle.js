import { addNumberToBasket } from "./sepet.js";
window.onload = function() {
    let itemsArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

    addNumberToBasket(itemsArray.length)
  };

const button = document.querySelector('.addToBasket ')

button.addEventListener("click",function () {


    let name = document.querySelector(".card-title").textContent;
    let price = document.querySelector(".fs-2").textContent;
    let image = document.querySelector(".card-img-top").src;
    let quantity = 1;


    addToBasket(name,price,image,quantity);
    //   localStorage.clear();
    // alert(name);
    // alert(price);
    // alert(image);
    // getList();

})

function addToBasket (name,price,image,quantity) {

    let json = {
        "name":name,
        "price":price,
        "image":image,
        "quantity":quantity
    }
    ;

    let itemsArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
    let addQuantity = false;
    // console.log("itemsArray.length: "+itemsArray.length);
   
    for (let index = 0; index < itemsArray.length; index++) {
        const element = itemsArray[index];
        if(element.name == name)
        {
            element.quantity += 1;
            addQuantity = true;
            break;
        }
    }

    if(!addQuantity)
        itemsArray.push(json);
    
    showAlert("Sepete Eklendi");

    localStorage.setItem("books",JSON.stringify(itemsArray));
    addNumberToBasket(itemsArray.length)

    console.log(itemsArray);
  }


function showAlert(message) {

    console.log("helele")
    let element = document.querySelector(".toast-container");
    if(element != null)
        element.remove();

    const template = document.createElement('div');    
    template.innerHTML = '<div class="toast-container position-fixed bottom-0 end-0 p-3"><div id="liveToast" class="toast" role="alert aria-live="assertive" aria-atomic="true"><div class="toast-header"><strong class="me-auto">Bildirim</strong><small>şimdi</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body">'+message+'</div></div></div>';
    
    document.body.appendChild(template); 

    const toastLiveExample = document.getElementById('liveToast')
    
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}

