const express = require('express')

const cookieParser = require('express')


const router = require('./routes/route.js');

const app = express();

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
// This is required to handle urlencoded data

app.use(express.static("public"));

// Middleware
app.use(express.json());

app.use(cookieParser());

//Use code
app.use('/', router);

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
