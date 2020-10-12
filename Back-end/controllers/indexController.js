const {Products} = require ('../models'); 
const {Categories} = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op


module.exports = {

    index: async (req, res) =>{
        let produtos = await Products.findAll();
        // res.send(produtos);

       res.render('index' , { produtos })
    },
    search: async (req, res)=> {
        let {key} = req.query

        let produtos = await Products.findAll({
            where: {
                prd_descricao: {
                    [Op.like]: `%${key}%`
                }
            }
        })

        return res.render('index', { produtos })
    }


    // CRIAR / CADASTRAR MATERIAL - JUAN

    // bulkCreate: async (req, res)=> {
    //     const listaDeProducts = [
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}
    //         {prd_descricao: "tapete de cachorro", prd_status: "1", prd_valor: "R$ 120,00", qtd_estoque: "20", type_products_id: "1"}

    //     ]

    //     const resultado = await type_products.bulkCreate(listaDeUsuarios);
    //     console.log(resultado);
    // }
}