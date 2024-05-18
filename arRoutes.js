const express = require('express');
const router = express.Router();

router.get('/ar1', function(req, res) {
    res.sendFile(__dirname + '/view/ar1.html');
});

router.get('/ar2', function(req, res) {
    res.sendFile(__dirname + '/view/ar2.html');
});

router.get('/ar3', function(req, res) {
    res.sendFile(__dirname + '/view/ar3.html');
});
// Add more routes as needed

module.exports = router;