const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

// const db = require('./models');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(require("./routes/apiRoutes"));

// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });