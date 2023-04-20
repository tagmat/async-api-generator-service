const express = require('express');
const router = express.Router();
const Generator = require('@asyncapi/generator')

//todo: exception handling
//todo: input respType: direct, base64, url. direct->direct with file header or base64encoded zip in respose, url with
// download url which has expiration date
//todo: token auth
//todo: zip tmp and do necessary
router.post('/', function (req, res, next) {
    let generator = new Generator('@asyncapi/html-template', "./tmp")
    let html = generator.generateFromString(req.body['yaml']).then(
        ()=>{
            console.log("ok");
        }
    );
    res.send(html);
});

module.exports = router;
