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
                swal(`Cupom de desconto: ${value}`);        
    });
});   


});

// swal("Cupom Valido!", "O cupom PETISCAO é valido!", "success")