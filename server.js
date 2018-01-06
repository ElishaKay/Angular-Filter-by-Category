const express = require('express');
const app = express();
var path = require("path");

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen(8080, () => console.log('Example app listening on port 8080!'));