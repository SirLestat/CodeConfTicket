require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Mailgun = require("mailgun.js"); // Importa Mailgun

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

// Configura Mailgun
const mailgun = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
}); // Usa tus variables de entorno

// Endpoint para enviar el correo
app.post("/send-email", async (req, res) => {
  try {
    const { formData } = req.body;

    const data = {
      from: process.env.MAILGUN_FROM_EMAIL, // Tu correo verificado en Mailgun
      to: formData.email, // El correo del formulario
      subject: "Tu ticket de Coding Conf",
      text: "Aquí está tu ticket de Coding Conf",
      html: `<h1>¡Gracias por registrarte!</h1><p>Adjunto encontrarás tu ticket para Coding Conf.</p>`,
    };

    await mailgun.messages().send(data); 

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo", error);
    res.status(500).json({ error: "Hubo un error al enviar el correo." });
  }
});

app.listen(port, () => {
  console.log(`Backend corriendo en http://localhost:${port}`);
});
