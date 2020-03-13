const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB()

app.use(express.json({ extended: false }))



app.use(`/api/users`, require(`./routes/api/users`));
app.use(`/api/readings`, require(`./routes/api/readings`));
app.use(`/api/auth`, require(`./routes/api/auth`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))