const User = require('../models/User');

module.exports = {
  async Login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res
          .status(401)
          .send({ error: 'Login failed! Check authentication credentials' });
      }
      const token = await user.generateAuthToken();
      res.send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async Verify(req, res) {
    // View logged in user profile
    res.send(req.user);
  },

  async Logout(req, res) {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token != req.token;
      });
      await req.user.save();
      res.send();
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async LogoutAll(req, res) {
    try {
      req.user.tokens.splice(0, req.user.tokens.length);
      await req.user.save();

      return res.send();
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
