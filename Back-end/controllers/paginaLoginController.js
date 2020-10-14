const { Users } = require ('../models')
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');


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
          user_senha,
          user_senha_confirm,
        } = req.body;

        const emailValidacao = await Users.findOne({where: {
            user_email:user_email
        }})

        if(user_senha == user_senha_confirm && emailValidacao === null){
            try {
                var resultado = await Users.create({
                  user_descricao,
                  user_email: user_email,
                  user_cpf,
                  user_telefone,
                  user_status: 1,
                  user_senha: bcrypt.hashSync(user_senha, 10)
                  // user_type_users_id: 1,
                });
              } catch (error) {
                return res.json(error);
              }
        } else {
            res.render('error')
        }
    

    
        // console.log(resultado);
    
        return res.redirect("/");
      }
};
