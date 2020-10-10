const { Users } = require ('../models')
const Sequelize = require('sequelize');
const bcrypt = require ('bcrypt')

module.exports  = {
    paginaLogin: (req,res) =>{
        res.render('PaginaLogin', { users })
    },

    paginaCadastro: (req,res) =>{
       return res.render('cadastro')
    },



    // paginaLogin: async (req, res)=> {
    //     let usersLogin = await users.findAll();
    //     return res.render('PaginaLogin', { usersLogin })
    // },
   
    store: async (req, res) => {
        const {
            user_descricao,
            user_email,
            user_cpf,
            user_telefone,
            user_senha
        } = req.body; 

        const resultado = await Users.create({
            user_descricao,
            user_email: user_email,
            user_cpf,
            user_telefone,
            user_status: 1,
            user_senha: bcrypt.hashSync(user_senha, 10),
            user_type_users_id: 1
        })
            .then((resultado) => resultado) 
            .catch((err) => {
                
                return res.status(503).send('Serviço não disponível')
            }
            ) 

        console.log(resultado);

        return res.redirect('/')
    }
};
