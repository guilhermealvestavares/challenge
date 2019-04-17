var blocoCompras = document.querySelector(".boxBuy");

$(".comprar").click(function() {
    blocoCompras.classList.toggle("ativo");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       document.getElementById("demo").innerHTML = xhttp.responseText;

    }
};

xhttp.open("GET", "https://guilhermealvestavares.github.io/challenge/products.json", true);
xhttp.send();
  });



  $(".menu-button").click(function() {
   
    blocoCompras.classList.remove("ativo");

 });

 



