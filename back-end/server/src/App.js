const express = require('express');
const Submission = require('../models/Contact');

//connect to the app
const app = express();

//middleware for req body parsing
app.use(express.json());

// ******ROUTES*******
// Form submission route
app.get('/submissions', (req, res) => {
  Submission.find({}, (error, submissions) => {
    if (error) {
      console.error('Error retrieving contact submissions:', error);
      res.status(500).json({ success: false, message: 'An error occurred while retrieving the submissions.' });
    } else {
      res.json({ success: true, submissions });
    }
  });
});

app.post('/submit', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create new instance with the extracted data
  const submission = new Submission({
    name,
    email,
    phone,
    message,
  });

  // Save the submission data to database
  submission.save((error, savedSubmission) => {
    if (error) {
      console.error('Error saving contact submission:', error);
      res
        .status(500)
        .json({ success: false, message: 'An error occurred while saving the submission.' });
      next(error);
    } else {
      res.json({
        success: true,
        message: 'Contact information submitted successfully',
        submission: savedSubmission,
      });
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, message: 'An error occurred' });
});

module.exports = app;