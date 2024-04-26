
function apear() {
    document.getElementById("nav-1").style.left = "0%"
}
function disapear() {
    document.getElementById("nav-1").style.left = "-100%"
}

function check(event){
  var  enteredtext=event.target.value.toUpperCase()
   var category= document.querySelector(".category-image")
   var element=category.querySelectorAll("div")
  
   for(count=0;count<element.length;count=count+1){
      
    var productname=element[count].querySelector("figcaption").textContent
     
    if(productname.toUpperCase().indexOf(enteredtext)<0){

        element[count].style.display="none"
      }
      else{
        element[count].style.display="block"
        
      }

   }
   


}
    