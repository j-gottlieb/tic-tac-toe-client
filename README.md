Technologies used:
  html
  scss
  javascript
  jquery
  tic-tac-toe API


Planning:
  Wireframes were the first thing I did. Even though my actual site didn't end
  up looking exactly like my wireframes, they helped me visualize the user
  experience before I built anything.

  Then, I pseudo-coded my game logic. This
  was done separate of the website interface. I wanted to take any series of x's
  and o's and add them to their corresponding index in an array. Then check that
  array against a list of win conditions.

  Coding the site started with running user authentication curl-scripts and then
  building out the html and javascript to make those ajax requests through the
  ui. Once those were completed, I began building my game logic with actual code
  to make sure it worked. Big surprise... it didn't. I beat my head against
  wall for a while trying to get my fancy array iteration methods to determine
  win conditions, but in the end I hard coded all of the win conditions

  From there, I connected the ui to the game logic through a
  series of event handlers. Then placed corresponding ajax requests to update
  the api in real time.

  Throughout this process, I used console.log and alert to help me track down and
  fix bugs.

  I found the hardest part of the process to be imagining my way through every
  possible combination of actions a user might take and making sure the ui
  accurately displayed objects at the correct time and in the correct way.
  Classmate feedback was crutial to squash all the bugs. Each instance of
  confusion led to a breakthrough. This project was extremely educational and
  revealed how informative the trial and error process is in coding.

  Given all I learned during this process, I will be much better able to plan my next
   project ahead of time.


  User Stories:
    As a user, I want to play tic-tac-toe against a friend on one device.
    I want the game to store my wins and losses
    I want to sign up
    I want to sign in
    I want to change my password
    I want to sign out
    I want to see how many games I've played.

Wireframes can be found here:
https://github.com/j-gottlieb/tic-tac-toe-client/tree/master/public/images
