const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        rquired: true
    }
});

const Submission = mongoose.model('Submission', contactSchema);

module.exports = Submission;