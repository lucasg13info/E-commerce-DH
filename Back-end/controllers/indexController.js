const {Products} = require ('../models'); 
const { type_products } = require('../models');
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
    //     const listaDeCategories = [
    //         {cat_descricao: "Cachorro", cat_status: "1", createdAt: "2016-05-04 17:30:19", updatedAt: "2016-05-04 17:30:19"}
    //     ]

    //     const resultado = await Categories.bulkCreate(listaDeCategories);
    //     console.log(resultado);
    // },

    // bulkCreate: async (req, res)=> {
    //     const listaDeTypeProducts = [
    //         {type_descricao: "Higiene", type_status: "1", categories_id: "1", createdAt: "2016-05-04 17:30:19", updatedAt: "2016-05-04 17:30:19"}
    //     ]

    //     const resultado = await type_products.bulkCreate(listaDeTypeProducts);
    //     console.log(resultado);
    // },


    // bulkCreate: async (req, res)=> {
    //     const listaDeProducts = [
    //         {prd_descricao: "Tapete Higiênico para Cães", prd_status: "1", prd_valor: "50.00", qtd_estoque: "10", caracteristica1: "Indicada para cães filhotes;", caracteristica2: "Controla o volume de fezes;", caracteristica3: "Nutrientes para um desenvolvimento saudável;", caracteristica4: "Disponível em embalagens de 15kg.",  type_products_id: "1", createdAt: "2016-05-04 17:30:19", updatedAt: "2016-05-04 17:30:19"},
         
    //     ]

    //     const resultado = await Products.bulkCreate(listaDeProducts);
    //     console.log(resultado);
    // }
}