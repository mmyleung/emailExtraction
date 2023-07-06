const fs = require("fs");

const file = fs.readFileSync("test.txt", "utf-8");

const readline = require('readline-sync');

let counter = 0;

const regex = /\b[\w]+@([\w\-\+~]+)./g;

const matches = [...file.matchAll(regex)];

const dictionary = {};

for (let i = 0; i < matches.length; i++) {
    const domain = matches[i][1];
    if (Object.keys(dictionary).includes(domain)){
        dictionary[domain] ++;
    } else {
        dictionary[domain] = 1;
    }
}

const dictionaryArray = [];

for (let domain in dictionary) {
    dictionaryArray.push([domain, dictionary[domain]]);
}

dictionaryArray.sort((a, b) => b[1] - a[1]);

console.log('How many occurances of domains would you like:');
const response = readline.prompt();

for (let i = 0; i < dictionaryArray.length; i++) {
    if (dictionaryArray[i][1] >= response) {
    console.log(dictionaryArray[i]);
    }
}


// console.log(dictionary);