// const models = require('../models');
const { Products } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const multer = require('multer');
const parser = multer({dest: "public/img/uploads"})

const crudProdutoController = {
    crudProduto: async (req, res)=> {
        let produtos = await Products.findAll();
        return res.render('./crudProduto/crudProduto', { produtos })
    },
    create: (req, res)=> {
        return res.render('./crudProduto/cadastroProduto')
    },
    store: async (req, res)=> {
        const { prd_descricao, prd_status, prd_valor, qtd_estoque, caracteristica1, caracteristica2, caracteristica3, caracteristica4, typeProductId } = req.body;

        const resultado = await Products.create({
            prd_descricao,
            prd_status,
            prd_valor,
            qtd_estoque,
            caracteristica1,
            caracteristica2,
            caracteristica3,
            caracteristica4,
            typeProductId
        });

        console.log(resultado);

        return res.redirect('/crud/produtos')
    },
    edit: async (req, res)=> {
        const {id} = req.params;

        const produto = await Products.findByPk(id);

        return res.render('./crudProduto/editarProduto', {produto})
    },
    update: async (req, res)=> {
        const {id} = req.params;
        const { prd_descricao, prd_status, prd_valor, qtd_estoque, caracteristica1, caracteristica2, caracteristica3, caracteristica4, typeProductId } = req.body;

        const resultado = await Products.update({
            prd_descricao,
            prd_status,
            prd_valor,
            qtd_estoque,
            caracteristica1,
            caracteristica2,
            caracteristica3,
            caracteristica4,
            typeProductId
        }, {
            where: {
                id:id
            }
        });

        console.log(resultado);

        return res.redirect('/crud/produtos')
    },
    destroy: async (req, res)=> {
        const {id} = req.params

        const resultado = await Products.destroy({
            where: {
                id:id
            }
        })

        console.log(resultado);

        res.redirect('/crud/produtos')
    }, 
    findById: async (req, res)=> {
        let {id} = req.params;

        let produto = await Products.findOne({
            where: {
                id:id // busca o usuario do ID que for digitado na rota EX.: http://localhost:3000/users/2 no terminal vem os dados do usuario de id 2 - Leonardo
            }
        })
        
        return res.render('./crudProduto/dadosProduto', { produto })
    },
    search: async (req, res)=> {
        let {key} = req.query

        let produtos = await Products.findAll({
            where: {
                prd_descricao: {
                    [Op.like]: `%${key}%`
                }
            }
            // order:  [
                // ['coluna que queremos ordenar', 'DESC- descrecente']
            // ]
        })

        return res.render('./crudProduto/crudProduto', { produtos })
    }
}

module.exports = crudProdutoController

// module.exports = {
//     crudProduto: (req, res) => {
//         res.render('./crudProduto/crudProduto');
//     }
// }
