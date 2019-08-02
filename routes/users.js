var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll({
    include: [ models.Task ]
  }).then((users) => {
    res.render('index', {
      title: 'Sequelize: Express Example1',
      users: users
    });
  });
});

module.exports = router;
