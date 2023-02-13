//import  fetch from 'node-fetch'
import AWS from "aws-sdk";

let services;
const payload = {
    "ServiceCode": "AmazonRDS",
    "FormatVersion": "aws_v1",
    "NextToken": null,
    "MaxResults": 1}


let prices = new AWS.Pricing({region: "us-east-1"});
prices.describeServices(payload, function(err, data) {
    if (err) console.log(err, err.stack + console.log("algo salio mal.."));
    else 
    services = data.Services[0].AttributeNames;

    console.log('todo bien');
    console.log('Services Trae: ', services);
});
















// const offerCode = "AmazonEC2";
// const format = "json"
// const URL = `https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/${offerCode}/current/index.${format}`

// async function getApi() {
//     const res = await fetch(URL);
    
//     return await res.json();
// }

// const prices = await getApi();
// console.log('Last log');
