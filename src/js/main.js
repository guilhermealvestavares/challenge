var blocoCompras = document.querySelector(".boxBuy");

$(".comprar").click(function() {
blocoCompras.classList.toggle("ativo");
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var dadosJSON = JSON.parse(xhttp.responseText);
      
       document.getElementById("qtd1").innerHTML ="Qtd.:"+ dadosJSON.cart.item[0].quantity;
       document.getElementById("preco1").innerHTML =dadosJSON.cart.item[0].bestPriceFormated;
       document.getElementById("nome1").innerHTML =dadosJSON.cart.item[0].name;

       document.getElementById("qtd2").innerHTML ="Qtd.:"+ dadosJSON.cart.item[1].quantity;
       document.getElementById("preco2").innerHTML =dadosJSON.cart.item[1].bestPriceFormated;
       document.getElementById("nome2").innerHTML =dadosJSON.cart.item[1].name;

       document.getElementById("qtd3").innerHTML ="Qtd.:"+ dadosJSON.cart.item[2].quantity;
       document.getElementById("preco3").innerHTML =dadosJSON.cart.item[2].bestPriceFormated;
       document.getElementById("nome3").innerHTML =dadosJSON.cart.item[2].name;

       document.getElementById("qtd4").innerHTML ="Qtd.:"+ dadosJSON.cart.item[3].quantity;
       document.getElementById("preco4").innerHTML =dadosJSON.cart.item[3].bestPriceFormated;
       document.getElementById("nome4").innerHTML =dadosJSON.cart.item[3].name;

function formatReal( int )
   {
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
   }

      var precificacao = [];
      
       for (var i = 0; i<=3; i++){
        precificacao.push(dadosJSON.cart.item[i].bestPrice);
        console.log(precificacao);
       }

       const reducer = (accumulator, currentValue) => accumulator + currentValue;
       document.querySelector(".precoValor").innerHTML ="R$ "+ formatReal(precificacao.reduce(reducer)); 

      
      
      

 
       


       

       document.querySelector(".img1").src ="."+dadosJSON.cart.item[0].image;
       document.querySelector(".img2").src ="."+dadosJSON.cart.item[1].image;
       document.querySelector(".img3").src ="."+dadosJSON.cart.item[2].image;
       document.querySelector(".img4").src ="."+dadosJSON.cart.item[3].image;
    }
};

xhttp.open("GET", "https://guilhermealvestavares.github.io/challenge/products.json", true);
xhttp.send();
  });



  $(".menu-button").click(function() {
   
    blocoCompras.classList.remove("ativo");

 });

 



