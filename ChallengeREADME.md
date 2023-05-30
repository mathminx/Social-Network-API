# Super Social Network

This application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses a MongoDB database, the Mongoose ODM, and Express.js for routing.

Below is a walkthrough video that demonstrates the application's functionality.



Run `npm install` to install the dependencies; then, run `npm start` to invoke the application. This will start the server and sync the Mongoose models to the MongoDB database.

API GET routes in Insomnia will display all data for users and thoughts in a formatted JSON.

API POST, PUT, and DELETE routes in Insomnia will respectively create, update, and delete users and thoughts.

API POST and DELETE routes in Insomnia will also create and delete reactions to thoughts, and add or remove friends to or from a user’s friend list.


**BONUS**: Remove a user's associated thoughts when deleted.


  * The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.

  * The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.

  * The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.



* Uses functionality to format queried timestamps properly.

### Bonus: +10 Points

* Application deletes a user's associated thoughts when the user is deleted.



## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

