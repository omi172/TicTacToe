// server.js (or app.js)
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint to handle contact form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "amitroy060595@gmail.com",
      pass: "Bullseye@172",
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: "amitroy060595@gmail.com",
    subject: "New Message from Portfolio Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
