const { Address } = require('../models');
const Sequelize = require('sequelize');

module.exports = {
    createEndereco: (req, res)=> {
        return res.render('paginaAlterarEndereco')
    },
    storeEndereco: async (req, res)=> {
        const { add_descricao, add_bairro, add_cep, add_numero, add_referencia, add_cidade, add_complemento, add_estado, add_uf } = req.body;

        const resultado = await Address.create({
            add_descricao,
            add_bairro,
            add_cep,
            add_numero,
            add_referencia,
            add_cidade,
            add_complemento,
            add_estado,
            add_uf
        });

        console.log(resultado);

        return res.redirect('/')
    }
}