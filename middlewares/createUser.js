var User = require('../models/user').User;

module.exports = async function (req, res, next) {
  res.locals.user = null;
  try {
    if (req.session && req.session.user_id) {
      var user = await User.findById(req.session.user_id);
      if (user) {
        res.locals.user = user;
      }
    }
  } catch (err) {
    return next(err);
  }
  next();
};
