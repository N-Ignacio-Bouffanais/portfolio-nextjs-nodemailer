const { Router } = require('express');
var nodemailer = require('nodemailer');
const router = Router();

//Variables de entorno
var { config } = require('dotenv');
config();

console.log(process.env.user)


router.post('/send-email', async (req, res) => {
    const { nombre_completo, correo, telefono, asunto, mensaje } = req.body;

    contentHTML = `
        <h1>Informacion del Contacto</h1>
        <ul>
            <li>Nombre: ${nombre_completo}</li>
            <li>Correo: ${correo}</li>
            <li>Telefono: ${telefono}</li>
            <li>Asunto: ${asunto}</li>
        </ul>
        <p> ${mensaje}</p>
    `
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass,
        }
    });

    const message = await transporter.sendMail({
        from: " 'Nicolas Server' <process.env.User>",
        to: 'nicolas.bouffanais.1999@gmail.com',
        subject: "Contacto de mi pagina Web",
        html: contentHTML
    });

    transporter.sendMail(message, function (err, res) {
        if (err) {                                            // if error
            console.log(err);
        } else {
            console.log(res);                                // if success
        }
    });

    console.log("Mensaje enviado", message.messageId);


    res.send('recibido');
});

module.exports = router;