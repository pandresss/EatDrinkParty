const router = require('express').Router();

router.use('/bars', require('./controllers/bars'));
router.get('/', (req, res) => res.render('index'));

module.exports = router;
