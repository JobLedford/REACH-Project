const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
admin.initializeApp();

exports.sendEmail = functions.firestore
  .document('Submissions/{submissionId}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.data();
    const { name, email, phone, message } = data;

    try {
      // Sendinblue API key and endpoint
      const apiKey = 'YOUR_SENDINBLUE_API_KEY';
      const sendEmailEndpoint = 'https://api.sendinblue.com/v3/smtp/email';

      // Send the email using Sendinblue API
      const response = await axios.post(
        sendEmailEndpoint,
        {
          sender: { email: 'your_sender_email@example.com', name: 'Your Name' },
          to: [{ email: email, name: name }],
          subject: 'Hello from Firebase!',
          htmlContent: `<p>Hello ${name},</p><p>${message}</p>`,
        },
        {
          headers: {
            'api-key': apiKey,
          },
        }
      );

      // Log success and return the response if needed
      console.log('Email sent successfully!', response.data);
      return response.data;
    } catch (error) {
      // Handle errors if the email fails to send
      console.error('Error sending email:', error);
      throw new functions.https.HttpsError('unknown', 'Failed to send email.');
    }
  });