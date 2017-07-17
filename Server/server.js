const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://rhvhjsmnvwxxmr:a8c5871cff63bfa3b67f80060cebda682c5c7242e41095158b499fd0b64e9bae@ec2-54-163-254-143.compute-1.amazonaws.com:5432/d1t2gbql3b3rof?ssl=true";
const session = require('express-session');
const passport = require('passport');
const strategy = require('./strategy');
const config = require('./config.js');
const app = module.exports = express();  //->establishes a server on the root path of the app
massive(connectionString).then(dbInstance=>app.set('db', dbInstance));
const clientsController = require('./controllers/clients');

//app.use( express.static( `${__dirname}/../build` ) );
app.use(cors());

// app.use(session({
// 	secret: config.secret,
// 	resave: false,
// 	saveUninitialized: false
// 	}
// ));

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
app.use(bodyParser.json());

app.get('/hello', function(request, response){
	response.send('Hello world');
});

app.post('/api/client', clientsController.addClient);

passport.serializeUser(function(user, done) {
	console.log(user);
  done(null, { id: user.id, display: user.displayName, nickname: user.nickname, email: user.emails[0].value });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/login',passport.authenticate('auth0',
	{successRedirect: '/hello', failureRedirect: '/login', failureFlash:true}));

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


app.listen(8080, function(){
	console.log('listening on port 8080');
});