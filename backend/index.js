// nodemon ../backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

const commoditiesRoutes = require('./routes/commodities');
app.use('/commodities', commoditiesRoutes);

// const studentsRoutes = require('./routes/students');
// app.use('/students', studentsRoutes);

// const categoriesRoutes = require('./routes/categories');
// app.use('/categories', categoriesRoutes);

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`listening on *:${port}`);
})