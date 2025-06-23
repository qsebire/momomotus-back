const fs = require('fs');
const path = require('path');

// Noeud d'un trie
function Node() {
    this.end = false;
    this.children = {};
}

// Structure du trie
function Trie() {
    this.root = new Node();
}

// Insertion d'un mot
Trie.prototype.insert = function (word) {
    let temp = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!temp.children[char]) {
            temp.children[char] = new Node();
        }
        temp = temp.children[char];
    }
    temp.end = true;
};

// Vérification d'un mot
Trie.prototype.check = function (word) {
    let temp = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!temp.children[char]) return false;
        temp = temp.children[char];
    }
    return temp.end === true;
};

// Construction du Trie à partir du fichier texte
function loadTrieFromFile(fileName = 'french') {
    const filePath = path.resolve(__dirname, `../dictionary/${fileName}`);
    const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

    const trie = new Trie();
    lines.forEach((word) => {
        const clean = word.trim().toLowerCase();
        if (clean) trie.insert(clean);
    });

    return trie;
}

module.exports = loadTrieFromFile;
