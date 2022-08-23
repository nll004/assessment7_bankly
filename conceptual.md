### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  > A JSON web token. It is an encrypted json object with a header, payload and a signature attached.

- What is the signature portion of the JWT?  What does it do?
  > The signature helps the server authenticate the JWT. If the encrypted signature matches the secret on the server, then the JWT is valid.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  > Yes the payload is easily decryptable.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  > You would generate the JWT on the server, send it to the client and store it in cookies or somewhere else.

- Compare and contrast unit, integration and end-to-end tests.
  > Unit tests are performed for an individual function or code block. Integration tests are performed for a group of functions to make sure they opperate as intended. End to end tests are performed from the client's perspective to make sure things work as intended from the front end to the backend.

- What is a mock? What are some things you would mock?
  > A mock is a test that substitutes an item in your function or feature without calling the actual item you are using in order to simiulate the process. It works well with things that you may not want to actually call in a test like an API with rate limits, etc.

- What is continuous integration?
  > Continuous Integration (CI) is a development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration can then be verified by an automated build and automated tests.

- What is an environment variable and what are they used for?
  > An environmental variable is a variable set up outside of the program. It is set to be accessed by the program while opperating in that environment.

- What is TDD? What are some benefits and drawbacks?
  > Test driven develoment is the idea of creating tests before you write your code. Benefits include helping keeping your functions small and testable, taking small steps and arguably will save time in the long term since you can make sure you aren't breaking your program with each new installment. Cons include more time up front and it being difficult for beginners.

- What is the value of using JSONSchema for validation?
  > A JSON schema saves a large amount of time and effort with validating all of the possible issues when receiving JSON data.

- What are some ways to decide which code to test?
  > If it can break it should prabably be tested.

- What does `RETURNING` do in SQL? When would you use it?
  > RETURNING is the command to return specific parts of your query. It allows you to confirm that the query worked correctly and allows you to use whatever data you may need to do other things with it.

- What are some differences between Web Sockets and HTTP?
  > Web sockets can display real time data in multiple browsers without refreshing while HTTP requires refreshing to update the page.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  > I prefer Flask personally. It is much more readable and requires less clutter in the code. It is very understandable even to beginners like myself. We didn't do alot with error handling in Flask but from what we've been shown I think Express may have simpler error handling options? Also JEST is more user friendly than Python unnittests.
