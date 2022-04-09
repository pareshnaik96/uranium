const express = require('express');
const logger = require('../logger/logger')
const printDate=require('../util/helper')
const trimmer= require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.logging()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    printDate.printTodayDate()
    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
    printDate.printCurrentMonth()
    res.send('My first ever api!')
});

router.get('/test-me3', function (req, res) {
    printDate.printBatchInfo()
    res.send('My first ever api!')
});


router.get('/test-me4', function (req, res) {
    trimmer.trimming()
    res.send('My first ever api!')
});

router.get('/test-me5', function (req, res) {
    trimmer.lowercase()
    res.send('My first ever api!')
});

router.get('/test-me6', function (req, res) {
    trimmer.uppercase()
    res.send('My first ever api!')
});
   
module.exports = router;
// adding this comment for no reason