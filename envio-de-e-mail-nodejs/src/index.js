const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run() {
  const mailSent = await transporter.sendMail({
    text: "Cupom de desconto ECHOPET",
    subject: "Cupom de desconto ECHOPET",
    from: "pi.ecommerce.pet@gmail.com",
    to: ["lucccasestefano1@gmail.com"],
    html: `
    <html>
    <body>
      
      <p>Muito obrigado por ter se cadastrado na ECHOPET!</p>

      <p>Segue abaixo um cupom de 10% de desconto para você realizar uma compra para seu pet, cupom: </p>

      <h2> PETISCAO </h2>


      <p>Atenciosamente, </p>

      <p>Equipe ECHOPET. </p>

      <img src= "../email.png">

    </body>
  </html> 
    `,
  });

  console.log(mailSent);
}

run();
