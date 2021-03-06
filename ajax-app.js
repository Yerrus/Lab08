// REQUIRES
const lists = require('./core/data');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
    let doc = fs.readFileSync('./index.html', "utf8");
    let dom = new JSDOM(doc);
    let $ = require("jquery")(dom.window);


    res.send(dom.serialize());
});

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));

app.get('/ajax-GET-list', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        console.log(dataList);
        res.send(dataList);

    } else if(formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        console.log(dataList);
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// for page not found (i.e., 404)
app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})
