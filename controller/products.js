const fs = require('fs');
const products = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

exports.createProduct = (req, res) => {
    console.log(req.body)
    products.products.push(req.body);
    res.json(products);
}
exports.getAllData = (req,res) => {
    res.json(products);
}
exports.getData = (req, res) => {
    let id = +req.params.id;
    let product = products.products[id];
    res.json(product);
}
// update
exports.changeData = (req, res) => {
    let id = +req.params.id;
    const prd = products.products[id];
    console.log(prd);
    (products.products).splice(id, 1, {...prd,...req.body, id:id})
    console.log(req.body);
    res.json({product: "updated"});
}

//delete the data
exports.deleteData = (req, res) => {
    let id = +req.params.id;
    const prd = products.products[id];
    (products.products).splice(id, 1)
    res.json({product: "updated"});
}

// export {createProduct, getAllData,getData, deleteData, changeData};