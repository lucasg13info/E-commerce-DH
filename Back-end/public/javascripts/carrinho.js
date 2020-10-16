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

// CUPOM DE DESCONTO

window.addEventListener('load', function() {

    let linkContato = document.getElementById('cupomDesconto');
        linkContato.addEventListener("click", function() {
            swal("Digite seu cupom:", {
                content: "input",
              })
              .then((value) => {
                swal(`Cupom de desconto: ${value}`);   
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

if(localStorage.getItem("carrinho")=== null) {
    localStorage.setItem("carrinho", JSON.stringify([]))
}

function addCarrinho() {
   let idProduto =  document.getElementById('idProduto').getAttribute("data-value")
   let descricaoProduto = document.getElementById('descricaoProduto').getAttribute("data-value")
   let valorProduto = document.getElementById('valorProduto').getAttribute("data-value")
   let carrinho = JSON.parse(localStorage.getItem("carrinho"))
   let qttProduto = document.getElementById('qttProduto').value
   let produtoExiste = false
   carrinho = carrinho.map(produto => {
    if(produto.idProduto == idProduto) {
        produtoExiste = true
        produto.qttProduto = Number.parseInt(produto.qttProduto) + Number.parseInt(qttProduto)
    }
    return produto
   })
   if(!produtoExiste ) {
    carrinho.push({
        idProduto: idProduto,
        descricaoProduto: descricaoProduto,
        valorProduto: valorProduto,
        qttProduto: qttProduto
    })
   }
   
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
}

document.getElementById('addCarrinho').addEventListener("click", function (event) {
    addCarrinho()
    window.location.href = "/carrinho"
})





