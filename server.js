const express = require('express');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(fileUpload());

app.use(`/api/users`, require(`./routes/api/users`));
app.use(`/api/readings`, require(`./routes/api/readings`));
app.use(`/api/auth`, require(`./routes/api/auth`));

//catch all route for production!!!!!!
if (process.env.NODE_ENV) {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//GOOGLE_APPLICATION_CREDENTIALS="C:\Users\timna\dev\googleCloud\vision\resources\fuel.json" npm run dev