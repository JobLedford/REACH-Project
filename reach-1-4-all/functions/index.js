const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sendEmail = require('./sendEmail');

admin.initializeApp();

exports.sendEmailOnFormSubmit = functions.firestore
  .document('submissions/{submissionId}')
  .onCreate(async (snapshot) => {
    const formData = snapshot.data();
    sendEmail(formData);
  });