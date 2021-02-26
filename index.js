const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path=require('path');

const PORT=process.env.PORT || 5000;

//SET HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "hello there, this is other stuff!";
//SET HANDLEBAR ROUTES


app.get('/', function (req, res) {
    res.render('home',{
    	stuff: otherstuff
    });
});


app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT,() => console.log('Server Listening on port ' + PORT));