let listaCarrinho = document.getElementById('listaCarrinho');

let produtos = JSON.parse(localStorage.getItem("carrinho"))

produtos.forEach(produtoCarrinho => {

    tr = document.createElement('tr')

    let coluna1 = document.createElement('th')
    let coluna2 = document.createElement('td')
    let coluna3 = document.createElement('td')
    let coluna4 = document.createElement('td')

    coluna1.innerHTML = produtoCarrinho.idProduto
    coluna2.innerHTML = produtoCarrinho.descricaoProduto
    coluna3.innerHTML = produtoCarrinho.qttProduto
    coluna4.innerHTML = "R$" + (produtoCarrinho.valorProduto * produtoCarrinho.qttProduto) + ",00"

    tr.appendChild(coluna1)
    tr.appendChild(coluna2)
    tr.appendChild(coluna3)
    tr.appendChild(coluna4)

    listaCarrinho.appendChild(tr)

})
