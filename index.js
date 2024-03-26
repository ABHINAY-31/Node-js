// ------------------------------------------ Express -------------------------------------------
const express = require('express');
const fs = require('fs');
const server = express();
server.use(express.json()); //body parser ()

const productController = require('./controller/products.js');

server.post('/products', productController.createProduct);
server.get('/products', productController.getAllData);
server.get('/products/:id', productController.getData);
// update
// put: override  && patch : modifues the value (rest are same)
server.put('/products/:id', productController.changeData)
server.delete('/products/:id', productController.deleteData)



//Products
// create using post method

// server.post('/products', (req, res) => {
//     console.log(req.body)
//     products.products.push(req.body);
//     res.json(products);
// })

// // Read Using get
// server.get('/products', (req,res) => {
//     res.json(products);
// })
// server.get('/products/:id', (req, res) => {
//     let id = +req.params.id;
//     let product = products.products[id];
//     res.json(product);
// })

// // update
// // put: override  && patch : modifues the value (rest are same)
// server.put('/products/:id', (req, res) => {
//     let id = +req.params.id;
//     const prd = products.products[id];
//     console.log(prd);
//     (products.products).splice(id, 1, {...prd,...req.body, id:id})
//     console.log(req.body);
//     res.json({product: "updated"});
// })

// // delete

// server.delete('/products/:id', (req, res) => {
//     let id = +req.params.id;
//     const prd = products.products[id];
//     (products.products).splice(id, 1)
//     res.json({product: "updated"});
// })




server.listen(8080, () => {
    console.log("server Started");
});
// server.use((req, res, next) => {
//     // console.log(req.method, req.ip, req.hostname);
//     // console.log(req.params.name);
//     next();
// })

// const auth = (req, res, next) => {
//     if(req.body.password == "123"){
//         next();
//     }
//     else{
//         res.sendStatus(404);
//     }
//     next();
// }

// server.get('/', (req, res) => {
//     res.send({type: "get"});
// })

// server.get('/demo/:id', (req, res) => {
//     let id = req.params.id;
//     console.log(id)
//     res.json(data);
// })
















//------------------------------------------- http -----------------------------------------------
// const http = require('http');
// const fs = require('fs');

// const value = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const product = data.products[0];
// const server = http.createServer((req, res) => {
//     console.log("server Started");
//     console.log(req.url);
//     if(req.url.startsWith('/product')){
//         console.log(req.url);
//         console.log(req.url.split('/'));
//         let id = req.url.split('/')[2];
//         const prd = data.products.find(p => p.id == id);
//         console.log(prd);
//         res.setHeader('Content-Type', 'text/html'); 
//             //     console.log(product);
//         let index = value.replace('**val1**', prd.title).replace('**val2**', prd.stock).replace('**val3**', prd.rating);
//         res.end(index);
        
//     }
//     // switch(req.url){
//     //     case '/':
//     //         res.setHeader('Content-Type', 'text/html'); 
//     //         console.log(product);
//     //         let index = value.replace('**val1**', product.title);
//     //         res.end(index);
//     //         break;
//     //     case '/api':
//     //         res.setHeader('Content-Type', 'application/json'); 
//     //         res.end(JSON.stringify(data));
//     //         break;
//     //     default:
//     //         res.writeHead(404);
//     //         res.end();
//     // }
//     // res.setHeader('dummy', 'Abhinay Singh');
//     // // res.setHeader('content-Type', 'application/json'); 
//     // res.end(value);
// })

// server.listen(8080); // bind our server to this port