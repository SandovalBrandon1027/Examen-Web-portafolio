//Importar nodemailer
const nodemailer = require('nodemailer');
require('dotenv').config(); // Para leer las variables de entorno desde el archivo .env

// creacion del transportador para el envio de correos utilizando SMTP
 
const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP
    }
})
module.exports = transporter;

// Estructura del correo Electronico
module.exports.sendMailToUser = async(userMail,token)=>{
    console.log(token);
    let info = await transporter.sendMail({
    from: process.env.USER_MAILTRAP,
    to: userMail,
    subject: "Verifica tu cuenta de correo electrónico",
    html: `<a href="http://localhost:3000/user/confirmar/${token}">Clic para confirmar tu cuenta</a>`,
    });
    console.log("Message sent: %s", info.messageId);
}