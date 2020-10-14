const { Email } = require('../models');
const Sequelize = require('sequelize');

const emailAutomaticoController = {
    // emailAutomatico: async (req, res) => {
    //     res.send("E-mail enviado")
    // },
    store: async (req, res)=> {
        const { emailAutomatico } = req.body;

        const resultado = await Email.create({
            emailAutomatico
        });

        console.log(resultado);

        return res.redirect('/')
    },
}

module.exports = emailAutomaticoController