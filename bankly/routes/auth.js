/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const jsonschema = require('jsonschema');
const regSchema = require('../schemas/userRegSchema.json');
const loginSchema = require('../schemas/userLoginSchema.json');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const ExpressError = require('../helpers/expressError');
const { json } = require('express');


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */

router.post('/register', async function(req, res, next) {
  try {
    const result = jsonschema.validate(req.body, regSchema);

    if(!result.valid){
      let listOfErrors = result.errors.map(error => error.stack);
      let error = new ExpressError(listOfErrors, 400);
      return next(error);
    }
    else{
      const { username, password, first_name, last_name, email, phone } = req.body;
      let user = await User.register({username, password, first_name, last_name, email, phone});
      const token = createTokenForUser(username, user.admin);
      return res.status(201).json({ token });
    }
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
  try {
    const result = jsonschema.validate(req.body, loginSchema);

    if (!result.valid){
      let listOfErrors = result.errors.map(error => error.stack);
      let error = new ExpressError(listOfErrors, 400);
      return next(error);
    }
    else {
      const { username, password } = req.body;
      let user = await User.authenticate(username, password);
      const token = createTokenForUser(username, user.admin);
      return res.json({ token });
    }
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
