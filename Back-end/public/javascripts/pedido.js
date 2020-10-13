const pedido = document.querySelector(".login-confirmar");

pedido.onclick = function(){
    let num = Math.floor(Math.random()*456789);
    alert("Compra efetuada!, seu número de pedido é : "+ num);
    // swal("Compra efetuada!", "Seu numero de pedido é: "+ num, "success");

}

