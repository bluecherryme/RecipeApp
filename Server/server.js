const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config.js');
const cors = require('cors');
const connectionString = "postgres://rhvhjsmnvwxxmr:a8c5871cff63bfa3b67f80060cebda682c5c7242e41095158b499fd0b64e9bae@ec2-54-163-254-143.compute-1.amazonaws.com:5432/d1t2gbql3b3rof?ssl=true";
const app = module.exports = express();  

massive(connectionString).then(dbInstance=>{
	app.set('db', dbInstance);

	// dbInstance.set_Schema()
	// .then(()=>console.log('table successfully reset'))
	// .catch((err)=>console.log(err));

	passport.use(new Auth0Strategy({
		domain: config.domain,
		clientID: config.clientID,
		clientSecret: config.clientSecret,
		callbackURL: config.callbackURL
		},

			function(accessToken,refreshToken,extraParams,profile,done){
			// accessToken is the token to call Auth0 API (not needed in the most cases)
			// extraParams.id_token has the JSON Web Token
			// profile has all the information from the user
				const {given_name,family_name,name,email,picture} = profile._json;
				//calls to database
				const id = profile.identities[0].user_id;

				dbInstance.getUser([id]).then((user)=>{
					if (user[0]){
						done(null,user[0])
					} else {
						dbInstance.createUser([id,given_name,family_name,name,email,picture])
						.then((user)=>{
						console.log('user',user[0]);				
						done(null,user[0])
						})
					}
				})
			}
		)
	);

});


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
{ successRedirect: 'http://localhost:3000/myaccount'}));

app.get('/auth/me', function(req, res) {
  if (!req.user) {
	res.status(200).send('No one logged in!')
  } else {
  	res.status(200).send(req.user);  //endpoint to check if someone is logged in
  }
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('http://localhost:3000/');
})  //endpoint to logout out

//database

//SAVE RECIPE
const recipeController = require('./controllers/recipes_Controller');
app.post('/api/saveRecipe', recipeController.saveRecipe);

//GET SAVED RECIPES
app.get('/api/recipes', recipeController.getSavedRecipes);

//SAVE INGREDIENTS
const shoppingListController = require('./controllers/shoppinglist_Controller');
app.post('/api/saveIngredient', shoppingListController.saveIngredient);

//GET SHOPPINGLIST
app.get('/api/shoppinglist', shoppingListController.getShoppingList);

app.listen(3001, function(){
	console.log('listening on port 3001');
});