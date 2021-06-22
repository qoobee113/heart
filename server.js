const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(process.env.PORT || 3000,function () {
    console.log('Sever Is Running');
});