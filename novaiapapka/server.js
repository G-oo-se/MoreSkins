const express = require('express');
const app = express();
const port = 5500;
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.get('/main', (req,res)=>{
    // res.send('Halo World!');
    res.render('index');
});
app.get('/main2', (req,res)=>{
    res.render('index2')
});


app.listen(port, () => {
    console.log('Server responsed!');
});