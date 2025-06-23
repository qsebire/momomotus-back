var express = require("express");
var router = express.Router();

router.post("/new", (req, res) => {
  const nbLetter = req.body.number;
  fetch(`https://trouve-mot.fr/api/size/${nbLetter}`)
    .then((response) => response.json())
    .then((wordObjArr) => {
      const word = wordObjArr[0].name;
      const wordWithoutAccent = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const wordUpper = wordWithoutAccent.toUpperCase();
      res.json({
        result: true,
        wordLength: wordUpper.length,
        word: wordUpper,
      });
    });
});

module.exports = router;
