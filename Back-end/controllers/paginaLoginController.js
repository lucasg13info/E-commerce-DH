const { Users } = require ('../models')
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const users = require('../models/users');



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
            // USAR SWAL
        }
    

    
        // console.log(resultado);
    
        return res.redirect("/login");
      },
      login: async (req, res) => {
        const user_email = req.body.user_email
        const user_senha = req.body.user_senha

        const user = await Users.findOne({
          where: {
            user_email: user_email
          }
        })

        if(!user) {
          return res.render('login', { errorLogin: "E-mail ou senha incorreto" })
        }

        if(!bcrypt.compareSync(user_senha, user.user_senha)) {
          return res.render('login', { errorLogin: "E-mail ou senha incorreto" })
        }


        req.session.user = user
        req.session.save()
        return res.redirect('/')
      },
      logout: async (req, res) => {
        await req.session.destroy()
        res.redirect("/login")
      }
};
