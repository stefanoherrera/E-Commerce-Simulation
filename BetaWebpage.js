const http = require('http');
const url = require('url');
const fs = require('fs');
const products = [
  { id: 1, name: 'Object 1', price: 80 },
  { id: 2, name: 'Object 2', price: 55 },
  { id: 3, name: 'Object 3', price: 120 },
];
let cart = [];
const server = http.createServer((require, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE html><html><head><title>- Store Page -</title></head><body>');
    res.write('<h1>Welcome to the Store</h1>');
    res.write('<ul>');
    products.forEach(p => {
        res.write(`<li>Id: ${p.id} - Name: ${p.name} - Price: ${p.price}</li>`);
    });
    res.write('</ul>');
    res.write('</body></html>');
    res.end();
});
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});