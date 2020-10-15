const { address } = require('../models');

const Sequelize = require('sequelize');

const paginaAlterarEnderecoController = {
    create: (req, res)=> {
        return res.render('paginaAlterarEndereco')
    },
    store: async (req, res)=> {
        const { add_descricao, add_bairro, add_cep, add_numero, add_referencia, add_cidade, add_complemento, add_estado, add_uf } = req.body;

        const resultado = await address.create({
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

        return res.redirect('/finalizarPedido')
    }
}
   
module.exports = paginaAlterarEnderecoController