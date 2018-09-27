Technologies used:
  html
  scss
  javascript
  jquery


Planning:
  Wireframes were the first thing I did. Even thought my actual site didn't end
  up looking exactly like my wireframes, they helped me visualize the user
  experience before I built anything.

  Then, I pseudo-coded my game logic. This
  was done separate of the website interface. I wanted to take any series of x's
  and o's and add them to their corresponding index in an array. Then check that
  array against a list of win conditions.

  Coding the site started with running user authentication curl-scripts and then
  building out the html and javascript to make those ajax requests through the
  ui. Once those were completed, I began building my game logic with actual code
  to make sure it worked.

  From there, I connected the ui to the game logic, through a
  collection of event handlers. Then placed corresponding ajax requests to update
  the api in real time.

  Throughout this process, I used console.log and alert to help me track down and
  fix bugs.


  User Stories:
    As a user, I want to play tic-tac-toe against a friend
    I want the game to store my wins and losses
    I want to sign up
    I want to sign in
    I want to change my password
    I want to sign out
    I want to see my wins and losses
