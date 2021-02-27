//Stock Market Portfolio App By John Elder Codemy.com 


const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path=require('path');
const request=require('request');
const PORT=process.env.PORT || 5000;


request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_8dfb83b25a2343f1add455c11da00a4a',{json : true},(err,res,body) =>{

if(err)
{
	return console.log(err);
}
console.log(body);
if(res.statusCode===200)
{
	console.log(body);
};
});
//api key pk_8dfb83b25a2343f1add455c11da00a4a
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

//create about page route
app.get('/about.html', function (req, res) {
    res.render('about');
});

app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT,() => console.log('Server Listening on port ' + PORT));