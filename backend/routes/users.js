const router = require('express').Router();
const bcrypt = require('bcrypt')
let User = require('../models/user.model');
const auth = require('../auth');
require('dotenv').config();
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    try {
		const query = await User.find();
		res.json(query);
    } catch (e) {
		res.json(e);
    }
})

router.post('/add', async(req, res) => {
	try {
		const username = req.body.username;
		const password = req.body.password;
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({username: username, password: hashedPassword});
		await newUser.save();
		res.json(`User: ${username} added!`);
	} catch (e) {
		res.json(e);
	}
})

router.post('/login', async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	try {
		const user = await auth.authenticate(username, password);
		const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET);
		res.send({ token });
		next();
	} catch (err) {
		res.json(err);
	}
});

router.post('/api/posts', verifyToken, (req, res) => {  
	jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
	  if(err) {
		res.sendStatus(403);
	  } else {
		res.json({
		  message: 'Post created...',
		  authData
		});
	  }
	});
  });
  

function verifyToken(req, res, next) {
	// Get auth header value
	const bearerHeader = req.headers['authorization'];
	// Check if bearer is undefined
	if(typeof bearerHeader !== 'undefined') {
	  // Split at the space
	  const bearer = bearerHeader.split(' ');
	  // Get token from array
	  const bearerToken = bearer[1];
	  // Set the token
	  req.token = bearerToken;
	  // Next middleware
	  next();
	} else {
	  // Forbidden
	  res.sendStatus(403);
	}
  
}

module.exports = router;