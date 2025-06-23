var express = require('express');
var router = express.Router();

const isWord = require('is-word');
const wordsFrench = isWord('french');

router.post('/', (req, res) => {
    const word = req.body.word;
    console.log(wordsFrench);

    const checkWord = wordsFrench.check(word.toLowerCase());
    console.log(checkWord);

    res.json({ result: checkWord });
});

module.exports = router;
