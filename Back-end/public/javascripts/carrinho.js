// const somaCarrinho = 0
//     for(i=0; i<Array.length; i++) {
//        return somaCarrinho + somaCarrinho[i];
//     }

//     console.log(somaCarrinho);

// let nome = swal("Digite seu cupom:", {
//     content: "input",
//   })
//   .then((value) => {
//     swal(`cupom: ${value}`);
//   });

// alert('Olá, ' + nome);
// swal("Cupom Valido!", "O cupom PETISCAO é valido!", "success");

// document.getElementById('cupomDesconto').innerText += ' ' + nome;

//

window.addEventListener('load', function() {

    let linkContato = document.getElementById('cupomDesconto');
        linkContato.addEventListener("click", function() {
            swal("Digite seu cupom:", {
                content: "input",
              })
              .then((value) => {
                // swal(`Cupom de desconto: ${value}`);   
                switch(value){
                    case "PETISCAO" :
                        return swal("Cupom Valido!", "Com o cupom PETISCAO você tem R$ 10,00 de desconto", "success");
                        break;
                    case null :
                        return swal("Cupom Invalido!", "Cupom vazio.", "error");
                    default: swal("Cupom Invalido!", `O cupom ${value} não existe`, "error");
                }  

    });
}, );   


});

// swal("Cupom Valido!", "O cupom PETISCAO é valido!", "success")

// function cupom() {
    // switch(){
    //     case "PESTISCAO" :
    //         return swal("Cupom Valido!", "O cupom PETISCAO é valido!", "success");
    //         break;
    //     default: swal("Cupom Invalido!", "Esse cupom é inválido!", "error");
    // }
// }