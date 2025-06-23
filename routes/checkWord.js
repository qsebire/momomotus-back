var express = require('express');
var router = express.Router();

const isWord = require('is-word');
const wordsFrench = isWord('french');

router.post('/', (req, res) => {
    const word = req.body.word;
    const wordWithoutAccent = word
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    const checkWord = wordsFrench.check(wordWithoutAccent.toLowerCase());
    res.json({ result: checkWord });
});

module.exports = router;
