const http = require('http');
// const data = {name : "abhinay"};
const fs = require('fs');

const value = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products[0];
const server = http.createServer((req, res) => {
    console.log("server Started");
    console.log(req.url);
    if(req.url.startsWith('/product')){
        console.log(req.url);
        console.log(req.url.split('/'));
        let id = req.url.split('/')[2];
        const prd = data.products.find(p => p.id == id);
        console.log(prd);
        res.setHeader('Content-Type', 'text/html'); 
            //     console.log(product);
        let index = value.replace('**val1**', prd.title).replace('**val2**', prd.stock).replace('**val3**', prd.rating);
        res.end(index);
        
    }
    // switch(req.url){
    //     case '/':
    //         res.setHeader('Content-Type', 'text/html'); 
    //         console.log(product);
    //         let index = value.replace('**val1**', product.title);
    //         res.end(index);
    //         break;
    //     case '/api':
    //         res.setHeader('Content-Type', 'application/json'); 
    //         res.end(JSON.stringify(data));
    //         break;
    //     default:
    //         res.writeHead(404);
    //         res.end();
    // }
    // res.setHeader('dummy', 'Abhinay Singh');
    // // res.setHeader('content-Type', 'application/json'); 
    // res.end(value);
})

server.listen(8080); // bind our server to this port