
// const flash = require('express-flash');
const express = require('express');
const exphbs  = require('express-handlebars');
// const bodyParser = require('body-parser');
const pizzasC = require('./pizza');
const app = express();

// const pizzas =  pizzaCart()

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');
// enable the static folder...
app.use(express.static('public'));
// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// add more middleware to allow for templating support
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		counter
	});
});

app.post('/count', function(req, res) {
	counter++;
	res.redirect('/')
});



// start  the server and start listening for HTTP request on the PORT number specified...
const PORT = process.env.PORT || 2000
app.listen(PORT, function () {
    console.log("App started at port:", PORT) 
});