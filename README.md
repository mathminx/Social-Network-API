# Super-Social Network

Superheroes lead busy lives and travel far and wide to save the world. As a result, they rarely get time to catch up with friends and swap stories. This is why I built the Super-Social Network. Super-Social is an API for a social network web application where superheroes can share their thoughts, react to friends’ thoughts, and create friend lists. It uses a MongoDB database, the Mongoose ODM, and Express.js for routing.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)


## Installation
  
Run `npm install` to install the dependencies; then, run `npm start` to invoke the application. This will start the server and sync the Mongoose models to the MongoDB database.


## Usage

Requests to the application's API routes should be structued as follows:

**Users:**
*  GET all users: `localhost:3001/api/users`
*  GET a single user: `localhost:3001/api/users`
*  POST (add) a user: `localhost:3001/api/users`   with body {"username": "*user's user name*", "email": "*user's email address*"}
*  PUT (update) a user: `localhost:3001/api/users/*user id*   with body {"*field to be updated*": "*content of update*"}
*  POST (add) a friend to a user: `localhost:3001/api/users/*user id*/friends/*friend's user id*`
*  DELETE a friend from a user: `localhost:3001/api/users/*user id*/friends/*friend's user id*` 
*  DELETE a user and that user's associated thoughts: `localhost:3001/api/users/*user id* 

**Thoughts:**
*  GET all thoughts: `localhost:3001/api/thoughts`
*  GET a single thought: `localhost:3001/api/thoughts/*thought id*`
*  POST (add) a thought: `localhost:3001/api/thoughts` with {"thoughtText": "*thought content*", "username": "*user's user name*" } 
*  PUT (update) a thought: `localhost:3001/api/thoughts/*thought id*`  with body {"thoughtText": "*thought content*"}
*  DELETE a thought: `localhost:3001/api/thoughts/*thought id*

**Reactions:**
*  POST (add) a reaction to a thought: localhost:3001/api/thoughts/*thought id*/reactions  with body {"reactionBody": "*reaction content*", "username": "*user's user name*"


The following walkthrough video demonstrates the functionality of the application.

https://drive.google.com/file/d/142252x0BCFjJeUVPGJi6JfGmOYNUgPRY/view


## Tests

Tests for `GET`, `POST`, `PUT`, and `DELETE` requests were performed locally using Insomnia.


## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)


## Badges

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  ![Mongoose](https://img.shields.io/badge/Mongoose-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  ![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)
