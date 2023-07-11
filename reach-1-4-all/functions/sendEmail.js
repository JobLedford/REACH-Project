const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: 'postmaster@sandbox8cbd05d60e7e408a96cd610a6feaff7c.mailgun.org',
    pass: 'f59848d98163cc16b7ac8987a8ce2653-262b213e-bd0f4c2f',
  },
});

function sendEmail(formData) {
  const mailOptions = {
    from: 'noreply@gmail.com',
    to: 'jo6ledford6@gmail.com',
    subject: 'New Form Submission',
    html: `
      <h1>New Form Submission</h1>
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Phone: ${formData.phone}</p>
      <p>Message: ${formData.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}

module.exports = sendEmail;
