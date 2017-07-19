const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const strategy = require('./strategy');
const config = require('./config.js');
const cors = require('cors');
const connectionString = "postgres://rhvhjsmnvwxxmr:a8c5871cff63bfa3b67f80060cebda682c5c7242e41095158b499fd0b64e9bae@ec2-54-163-254-143.compute-1.amazonaws.com:5432/d1t2gbql3b3rof?ssl=true";

const app = module.exports = express();  
app.use(bodyParser.json());
app.use(session({
	secret: config.secret,
	resave: true,
	saveUninitialized: true
	}
));

app.use(passport.initialize());
app.use(passport.session());

app.use( express.static( `${__dirname}/../build` ) );
 
//database
massive(connectionString).then(dbInstance=>app.set('db', dbInstance));

app.use(cors());
passport.use(strategy);


passport.serializeUser(function(user, done) {
	console.log(user);
  done(null, { id: user.id, display: user.displayName, nickname: user.nickname, email: user.emails[0].value });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/login',passport.authenticate('auth0',
	{successRedirect: '/hello', failureRedirect: '/login', failureFlash:true}));

app.get('/hello', function(request, response){
	response.send('Hello world');
});

const clientsController = require('./controllers/clients');
app.post('/api/client', clientsController.addClient);

// app.get('/me', function(req,res,next){
// 		if(!req.user){
// 			res.redirect('/login');
// 		} else {
// 			// req.user === req.session.passport.user
//     		// console.log( req.user )
//     		// console.log( req.session.passport.user );
// 		res.status(200).send(JSON.stringify(req.user,null,10));
// 	}
// 	}
// );

//SAVE RECIPE
const recipeController = require('./controllers/recipes_Controller');
app.post('/api/saveRecipe', recipeController.saveRecipe);

//SAVE INGREDIENTS
const shoppingListController = require('./controllers/shoppinglist_Controller');
app.post('/api/saveIngredient', shoppingListController.saveIngredient);

app.listen(8080, function(){
	console.log('listening on port 8080');
});