var express = require('express')
var app = express()
var client = require('flipkart-api-affiliate-client');
var fkClient = new client({
    trackingId:"yuganshch",
    token:"34adf1305516462d8ce93de45594da81",
},"json");
app.get('/',function(req,res){
	res.sendFile(__dirname +'/public/index.html')
})
app.get('/search',function(req,res){
	fkClient.doKeywordSearch(req.query.key,1).then(function(value){
        console.log(value); //object with status, error and body
        res.send(value.body)
    });
});
