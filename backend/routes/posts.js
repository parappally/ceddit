const router = require('express').Router();
let Post = require('../models/post.model');

router.get('/', async (req, res) => {
    try {
      const query = await Post.find();
      res.json(query);
    } catch (e) {
	  	res.json(e);
    }
})

router.post('/add', async(req, res) => {
	try {
    const username = req.body.username;
    const text = req.body.text;
    const title = req.body.title;
    const subreddit = req.body.subreddit;

    const newPost = new Post({username, text, title, subreddit});
    await newPost.save();
		res.json(`${title} added to ${subreddit}!`);
	} catch (e) {
		res.json(e);
	}
})

router.get('/subreddit/:id', async (req, res) => {
  try {
    const query = await Post.find({subreddit: req.params.id});
    res.json(query);
  } catch (e) {
    res.json(e);
  }
})

router.get('/user/:id', async (req, res) => {
  try {
    const query = await Post.find({username: req.params.id});
    res.json(query);
  } catch (e) {
    res.json(e);
  }
})

module.exports = router;