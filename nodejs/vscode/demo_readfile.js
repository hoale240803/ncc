// ### add html file ( display frontend)
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {

// fs.readFile('demohtml.html', function(err, data) {
//     console.log("loading!!!");
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     console.log()
//     return res.end();
//   });
// }).listen(8080);


//   ### append file 
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// ### create new file
// var fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
    
//   });
// ### write file
// var fs = require('fs');
// fs.writeFile('content1.txt', 'Hello', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// ### delete file
// var fs = require('fs');
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

// ### rename file
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });




