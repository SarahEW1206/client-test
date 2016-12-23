var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoUrl = 'mongodb://localhost/sassBiz-api';
var db = mongoose.connect;
mongoose.connect(mongoUrl);
var app = express();

var Item = require('./models/item');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080

var router = express.Router();

router.use('/', function (req, res, next) {
    next();
});

//Was getting an error "Can't set headers after they are sent" on some functions. Researched and found this http://stackoverflow.com/questions/32877242/sending-different-post-response-in-nodejs which recommends adding "return" in front of res.send to avoid it getting called multiple times.

router.route('/items')
    .post(function (req, res) {
        var item = new Item();
        Item.create(req.body, function (err) {
            if (err)
                return res.send(err);
            res.send(item)
        })
    })
    .get(function (req, res) {
        Item.find(function (err, items) {
            if (err)
                return res.send(err);
            res.json(items);
        })
    });

router.route('/items/needed')
    .get(function (req, res) {
        Item.find(function (err, items) {
            return res.send(items);
        })
    });


router.route('/items/purchased')
    .get(function (req, res) {
        Item.find(function (err, items) {
            return res.send(items);
        })
    });

router.route('/items/images')
    .get(function (req, res) {
        Item.find(function (err, items) {
            return res.send(items);
        })
    });

router.route('/items/:item_id')
    .get(function (req, res) {
        Item.findById(req.params.item_id, function (err, item) {
            if (err)
                return res.send(err);
            res.json(item);
        })
    })

router.route('/items/:item_id')
    .delete(function (req, res) {
        var id = req.params.item_id;
        Item.remove({ '_id': id }, function (result) {
            return res.send(result);
        })
    })

router.route('/items/:id')
    .put(function (req, res) {
        var id = req.params.id;
        var updates = req.body;
        Item.update({ '_id': id }, req.body,
            function (err, numberAffected) {
                if (err) return console.log(err);
                console.log('Updated items', numberAffected);
                return res.sendStatus(202);
            })
    })

app.use('/api', router)
app.use(express.static('app'));

app.listen(port);
console.log('server running on port ' + port);

