const app = require('./src/App');
const port = 3000;
const mongoose = require('mongoose');

// Configure .env file
require('dotenv').config();

//connect to mongoose database
mongoose.connect(process.env.MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connnected to the MongoDB database');
    })
    .catch((error) => {
        console.error('Error connecting to the MongoDB database', error);
    });

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});