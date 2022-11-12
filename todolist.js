let input = document.getElementById("input") ;
let ekle  = document.getElementById("ekle")  ;
let cıkar = document.getElementById("cıkar") ; 
let liste = document.getElementById("liste") ;

ekle.addEventListener("click", function () {
   let list = document.createElement("li");
   liste.appendChild(list);
   list.innerHTML= input.value;
   input.value = "";
   
   list.addEventListener('click' , function () {
    list.style.textDecoration = 'line-through'
   })
   list.addEventListener('dblclick' , function () {
    liste.removeChild(list)

})
cıkar.addEventListener('click', function () {
    
    list.remove()
})
   
})





