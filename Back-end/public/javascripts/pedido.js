

const pedido = document.querySelector(".login-confirmar");

pedido.onclick = function(){
    let num = Math.floor(Math.random()*456789);
    swal({
        title: "Compra efetuada!",
        text: "Seu número de pedido é " + num +"!",
        icon: "success",
        button: "Continuar",
      });
    

};



