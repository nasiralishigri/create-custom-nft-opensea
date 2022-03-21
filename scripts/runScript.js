const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

const filePath = path.join(__dirname, '../assets/queen.png');
// const filePath = path.join(__dirname, '../data/metadata.json');

pinFileToIPFS(filePath);
