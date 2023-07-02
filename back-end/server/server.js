const express= require('express');
const mongoose = require('mongoose');
const Submission = require('./models/Contact');

//connect to the express app
const app = express();

//configure .env file
require('dotenv').config();

//connect to mongoose database
mongoose.connect('mongodb://localhost:27017/REACH', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connnected to the MongoDB database');
    })
    .catch((error) => {
        console.error('Error connecting to the MongoDB database', error);
    });

//middleware for req body parsing
app.use(express.json());

//******ROUTES*******//

//Form submission route
app.post('/submit', (req,res) => {
    const { name, email, phone, message } = req.body; //extract the form data from req body

    //create new instance with the extracted data
    const submission = new Submission({
        name,
        email,
        phone,
        message,
    });

    //save the submission data to database
    submission.save((error, savedSubmission) => {
        if (error) {
            console.error('Error saving contact submission:', error);
            res.status(500).json({ success: false, message: 'An error occurred while saving the submission.' });
        } else {
            res.json({ success: true , message: 'Contact information submitted successfully', submission: savedSubmission });
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ success: false, message: 'An error occurred' });
  });

//start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});