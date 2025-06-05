let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/shoot/browser'));

app.get('/*',(req,resp)=>{
    resp.sendFile(__dirname+'/dist/shoot/browser/index.html');
});

app.listen(process.env.PORT || 4200);