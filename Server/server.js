const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config.js');
const cors = require('cors');
const connectionString = "postgres://rhvhjsmnvwxxmr:a8c5871cff63bfa3b67f80060cebda682c5c7242e41095158b499fd0b64e9bae@ec2-54-163-254-143.compute-1.amazonaws.com:5432/d1t2gbql3b3rof?ssl=true";

const app = express();  

app.use(bodyParser.json());
app.use(session({
	secret: config.sessionSecret,
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//app.use( express.static( `${__dirname}/../build` ) );

//AUTH0

app.use(cors());
passport.use(new Auth0Strategy({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
},
    function(accessToken,refreshToken,extraParams,profile,done){
		console.log(profile);
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
        return done(null,{id:2,username:'Joe',email:'joe@joe.com'});
    }
));


passport.serializeUser(function(user, done) {
	console.log('serializing', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('serializing', user); //this is the user that's passed through from done
  done(null, user);
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', 
{ successRedirect: 'http://localhost:3000/'}));

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.status(200).send('No one logged in!');
  res.status(200).send(req.user);  //endpoint to check if someone is logged in
})
app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})  //endpoint to logout out




//database
massive(connectionString).then(dbInstance=>app.set('db', dbInstance));

const clientsController = require('./controllers/clients');
app.post('/api/client', clientsController.addClient);

//SAVE RECIPE
const recipeController = require('./controllers/recipes_Controller');
app.post('/api/saveRecipe', recipeController.saveRecipe);

//SAVE INGREDIENTS
const shoppingListController = require('./controllers/shoppinglist_Controller');
app.post('/api/saveIngredient', shoppingListController.saveIngredient);

app.listen(8080, function(){
	console.log('listening on port 8080');
});