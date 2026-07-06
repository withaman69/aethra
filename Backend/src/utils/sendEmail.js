const { Resend } = require("resend");
const Mailgen = require("mailgen");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Aethra",
      link: "https://aethra-one.vercel.app",
    },
  });

  const emailBody = mailGenerator.generate(
    options.mailgenContent
  );

  await resend.emails.send({
    from: "Aethra <onboarding@resend.dev>",
    to: options.email,
    subject: options.subject,
    html: emailBody,
  });
};

module.exports = sendEmail;