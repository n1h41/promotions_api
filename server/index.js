const express = require('express');

const app = express();

//Import Routes
const promotionsRoute = require('../routes/promotions_routes')

const PORT = process.env.PORT || 4444;

app.use(express.json());

//Routes
app.use('/promotions', promotionsRoute)

app.listen(PORT, () => {
    console.log(`\n server is listening to http://localhost:${PORT}`)
})