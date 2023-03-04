module.exports = (app) => {
  const router = require('express').Router();
  const userController = require('../controllers/userController');

  router.get('/worker', userController.index);
  router.get('/test', (req, res) => {
    return res.send({ message: 'haloo' });
  });

  app.use(router);
};
