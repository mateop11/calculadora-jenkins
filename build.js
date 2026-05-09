const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const sourceFile = path.join(__dirname, 'src', 'calculadora.js');
const targetFile = path.join(distPath, 'calculadora.js');

if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

fs.copyFileSync(sourceFile, targetFile);

console.log('Build generado correctamente en la carpeta dist');