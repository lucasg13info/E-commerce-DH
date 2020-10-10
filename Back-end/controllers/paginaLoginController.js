const {users} = require ('../models')


module.exports  = {
    paginaLogin: (req,res) =>{
        res.render('PaginaLogin')
    },
    store: async (req, res) => {
        const {
            name,
            email,
            password
        } = req.body 

        const resultado = await users.create({
            name,
            email,
            password
        })
        console.log(resultado)

        return res.redirect('/')
    }
};
