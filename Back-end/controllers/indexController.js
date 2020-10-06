const {Products} = require ('../models'); 



module.exports = {

    index: async (req, res) =>{
        // let produtos = await Products.findAll({include: 'typeProducts'});
        // res.send(produtos);

       res.render('index')
    }
}