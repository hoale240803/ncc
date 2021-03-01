// using parse method()

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'



// ### new way to get info from url
const url1 = new URL("http://localhost:8080/default.htm?year=2017&month=february");

console.log(url1); // return object
console.log("hostname: ",url1.hostname);// return 
console.log(url1.host);// 'localhost:8080'
console.log("search params: ",url1.searchParams.get('year'));
