const router = require('express').Router();
const bcrypt = require('bcrypt')
let User = require('../models/user.model');

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
		res.json('User added!');
	} catch (e) {
		res.json(e);
	}
})

module.exports = router;