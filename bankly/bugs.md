1. There is no JSON validation for registration route. Someone can send anything to the POST /auth/register route to be sent to the database. The database has null restraints on everything.

2. There is no JSON validation for POST /auth/login data. Should require a username and password before trying to handle the request.

3. Middleware function authUser() does not verify the token before continuing but rather just reads the payload. This is a major security issue and essentially makes the token useless since it isn't actually being verified.

4. User.get(username) function does not handle correctly for a user not being found.

5. User.delete(username) function does not handle correctly for a user not being found.

6. User cannot edit their own information becuase all edits required admin. I removed admin requirement and set a condtional that if the user tries to alter admin status an error is thrown.
