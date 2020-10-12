const { Users } = require ('../models')
const Sequelize = require('sequelize');


module.exports  = {
    paginaLogin: (req,res) =>{
        res.render('PaginaLogin', { users })
    },

    paginaLogin: (req,res) =>{
        res.render('login')
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
            user_senha,
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
