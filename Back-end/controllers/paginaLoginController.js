const { users } = require ('../models')
const Sequelize = require('sequelize');

module.exports  = {
    paginaLogin: (req,res) =>{
        res.render('PaginaLogin', { users })
    }
    // paginaLogin: async (req, res)=> {
    //     let usersLogin = await users.findAll();
    //     return res.render('PaginaLogin', { usersLogin })
    // },
//     store: async (req, res) => {
//         const {
//             user_descricao,
//             user_email,
//             user_cpf,
//             user_telefone,
//             user_status
//         } = req.body; 

//         const resultado = await users.create({
//             user_descricao,
//             user_email,
//             user_cpf,
//             user_telefone,
//             user_status
//         });

//         console.log(resultado);

//         return res.redirect('/')
//     }
};
