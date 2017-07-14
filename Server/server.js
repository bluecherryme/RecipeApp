const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const strategy = require('./strategy');

const app = express();   //->establishes a server on the root path of the app
app.use(session({
	secret: 'skjfdaj;fkjas;fajkdfjieuvsf16876',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
app.use(express.static('build'));
app.use(bodyParser.json());

app.get('/home', function(request, response){
	response.send('Hello world');
});

passport.serializeUser(function(user, done) {
  done(null, { id: user.id, display: user.displayName, nickname: user.nickname, email: user.emails[0].value });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/login',passport.authenticate('auth0',
	{successRedirect: '/home', failureRedirect: '/login', failureFlash:true}));

app.get('/home', function(req,res,next){
		if(!req.user){
			throw new Error('user null');
		}
		res.redirect("/");
	}
);


app.listen(3000, function(){
	console.log('listening on port 3000');
});