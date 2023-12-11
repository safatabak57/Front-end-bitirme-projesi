window.onload = function() {

    let itemsArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

    addNumberToBasket(itemsArray.length)
    addBooks();

  const removeBooks = document.querySelectorAll(".remove-book ")
    removeBooks.forEach(book => {
      book.addEventListener("click",function () {
        removeBook(this.id)
      })
    });

};


export function addNumberToBasket(number) {

  let last = document.querySelector(".quantity");
  if(last != null)
    last.innerHTML = number;
  
  const template = document.createElement('div');    
  template.innerHTML = '<div class="quantity" style="font-size: 16px;font-weight: bold;float: right;margin-left: 30px;margin-top: -12px; height:5px">'+number+'</div>';
  const element = document.querySelector(".sepet");
  element.appendChild(template); 
}



function addBooks() {
  const books = document.querySelector(".books")

  if(books == null)
    return;
  books.innerHTML = "";
  
  let itemsArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
  console.log(itemsArray)
  for (let index = 0; index < itemsArray.length; index++) {
    const element = itemsArray[index];
    if(element == null)
      continue;
    books.innerHTML += '<div class="card mb-3 '+element.name+'"> <div class="row g-0"> <div class="col-md-4"> <img src="'+element.image+'" class="img-fluid rounded-start" alt="..."> </div> <div class="col-md-8"> <div class="card-body"> <h5 class="card-title">'+element.name+'</h5> <p class="card-text">'+element.price+'</p> <p class="card-text"><small class="text-body-secondary">'+element.quantity+'</small></p> </div> <div class="remove-book" id="'+element.name+'"> <i class="fa-solid fa-trash"></i> </div> </div> </div> </div>';
} 

}



function removeBook(name) {
  let itemsArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
  for (let index = 0; index < itemsArray.length; index++) {
    const element = itemsArray[index];

    if(element == null)
      continue;

    if(element.name == name)
    {
      itemsArray.splice(index, 1)
    }  

  }
  addNumberToBasket(itemsArray.length)
  localStorage.setItem("books",JSON.stringify(itemsArray));

  window.location.reload()
}