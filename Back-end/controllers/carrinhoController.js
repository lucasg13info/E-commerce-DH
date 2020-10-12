const {Products} = require ('../models'); 
const {Categories} = require('../models')

module.exports = {
    // carrinho: (req, res) => {
    //     res.render('Carrinho')
    // },

    
    carrinho: async (req, res)=> {
        let carrinhos = await Products.findAll();
        return res.render('Carrinho', { carrinhos })
    }, 
}