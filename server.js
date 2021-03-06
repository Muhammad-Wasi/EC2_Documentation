const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }));

app.use(express.json());

// All Port Access

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});



// Socket io

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}!`);
});

app.get('/', (req, res) => res.send('Hello, world!'));
app.get('/ec2Documentation', (req, res) => res.sendFile('./index.html', {root: __dirname }));
