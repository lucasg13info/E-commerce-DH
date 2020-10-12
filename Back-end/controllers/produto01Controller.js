const {Products} = require ('../models'); 
const {Categories} = require('../models')

module.exports = {
    // produto01: (req, res) => {
    //     res.render('Produto-01')
    // }
    // produto01: async (req, res)=> {
    //     let produtos = await Products.findAll();
    //     return res.render('Produto-01', { produtos })
    // },

    findById: async (req, res)=> {
        let {id} = req.params;

        let produto = await Products.findOne({
            where: {
                id:id // busca o usuario do ID que for digitado na rota EX.: http://localhost:3000/users/2 no terminal vem os dados do usuario de id 2 - Leonardo
            }
        })
        
        return res.render('Produto-01', { produto })
    },

}