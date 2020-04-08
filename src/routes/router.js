const express = require('express');
const auth = require('../middleware/auth');

const UserController = require('../controllers/UserController');
const SessionController = require('../controllers/SessionController');
const ItemController = require('../controllers/ItemController');

const router = express.Router();

router.post('/users', UserController.Create);

router.post('/users/login', SessionController.Login);

router.get('/users/me', auth, SessionController.Verify);

router.post('/users/me/logout', auth, SessionController.Logout);

router.post('/users/me/logoutall', auth, SessionController.LogoutAll);

router.post('/itens', ItemController.Create);

module.exports = router;
