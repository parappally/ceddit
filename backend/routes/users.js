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

router.post('/auth', async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	try {
		const user = await auth.authenticate(username, password);
		const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET);
		console.log(user);
		res.send({ token });
		next();
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;