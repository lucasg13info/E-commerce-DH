

const pedido = document.querySelector(".login-confirmar");

pedido.onclick = function(){
    let num = Math.floor(Math.random()*456789);
<<<<<<< HEAD
    swal({
        title: "Compra efetuada!",
        text: "Seu número de pedido é " + num +"!",
        icon: "success",
        button: "Continuar",
      });
    
=======
    alert("Compra efetuada!, seu número de pedido é : "+ num);
    // swal("Compra efetuada!", "Seu numero de pedido é: "+ num, "success");
>>>>>>> e7dc40d084bce8d038fa11ea3ab88a25e9d53268

};



