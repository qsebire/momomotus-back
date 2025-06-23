var express = require('express');
var router = express.Router();

const loadTrieFromFile = require('../utils/loadTrieFromFile');
const wordsTrie = loadTrieFromFile('french');

router.post('/', (req, res) => {
    const word = req.body.word?.toLowerCase();
    if (!word) return res.status(400).json({ error: 'Missing word' });

    const isValid = wordsTrie.check(word);

    res.json({ result: isValid });
});

module.exports = router;
