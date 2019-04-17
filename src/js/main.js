$(".comprar").click(function() {
    const blocoCompras = document.querySelector(".box-buy");
    blocoCompras.classList.toggle("ativo");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://guilhermealvestavares.github.io/challenge/products.json", true);
xhttp.send();



  });