const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Aethra",
      link: "https://aethra.com",
    },
  });

  const emailBody = mailGenerator.generate(options.mailgenContent);

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: options.email,
    subject: options.subject,
    html: emailBody,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;