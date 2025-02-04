require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

const resend = new Resend(process.env.RESEND_API_KEY);

// Endpoint para enviar el correo
app.post("/send-email", async (req, res) => {
  try {
    const { formData } = req.body;

    const data = {
      from: process.env.RESEND_FROM_EMAIL,
      to: "lesthath_@hotmail.com", // El correo del formulario
      subject: "Tu ticket de Coding Conf",
      text: "Aquí está tu ticket de Coding Conf",
      html: `<h1>¡Gracias por registrarte!</h1><p>Adjunto encontrarás tu ticket para Coding Conf.</p>`,
    };

    const email = await resend.emails.send(data); // Envía el correo

    res.status(200).json({ message: "Correo enviado correctamente", email });
  } catch (error) {
    console.error("Error al enviar el correo", error);
    res.status(500).json({ error: "Hubo un error al enviar el correo." });
  }
});

app.listen(port, () => {
  console.log(`Backend corriendo en http://localhost:${port}`);
});

export default app;
 
