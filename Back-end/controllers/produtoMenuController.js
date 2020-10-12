module.exports = {
    produtosParaCachorro: (req, res) => {
        res.render('cachorroMenu')
    },
    produtosParaGato: (req, res) => {
        res.render('gatoMenu')
    },
    produtosParaPassaros: (req, res) => {
        res.render('passaroMenu')
    },
    produtosParaPeixes: (req, res) => {
        res.render('peixeMenu')
    }

  
}
