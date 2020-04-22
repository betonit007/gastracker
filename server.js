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

    process.env.GOOGLE_APPLICATION_CREDENTIALS = {
        type: process.env.GOOGLE_TYPE,
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: process.env.GOOGLE_AUTH_URI,
        token_uri: process.env.GOOGLE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509,
        client_x509_cert_url: process.env.GOOGLE_CLIENT_X509  
    }
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));