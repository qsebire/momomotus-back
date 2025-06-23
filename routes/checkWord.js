var express = require('express');
var router = express.Router();

const isWord = require('is-word');
const wordsFrench = isWord('french');

router.post('/', (req, res) => {
    const word = req.body.word;
    const checkWord = wordsFrench.check(word.toLowerCase());
    res.json({ result: checkWord });
});

module.exports = router;
