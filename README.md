# bootcamp-challenge-18-Social-Network-API

Welcome to the Social Network API challenge! This project is designed to help you learn how to create a RESTful API using Express.js, MongoDB, and Mongoose. The API will serve as a backend for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

### Table of Contents
Features
Requirements
Installation
Usage
API Endpoints
Demo Video
Features
User registration and authentication
Share thoughts and reactions
Add and remove friends
Retrieve user and thought data
Requirements
Node.js
MongoDB
Mongoose
Express.js
(Optional) JavaScript date library or native JavaScript Date object
Installation
Clone this repository:
bash
Copy code
git clone https://github.com/your_username/social-network-api.git
Change into the project directory:
bash
Copy code
cd social-network-api
Install the required dependencies:
Copy code
npm install
Make sure to install Mongoose version 6.9.2:

css
Copy code
npm i mongoose@6.9.2
Start the server:
sql
Copy code
npm start
Usage
Once the server is running, you can interact with the API using an API client like Postman or through a frontend application.

### API Endpoints
GET /api/users: Get all users
GET /api/users/:id: Get a single user by ID
POST /api/users: Create a new user
PUT /api/users/:id: Update a user by ID
DELETE /api/users/:id: Delete a user by ID
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list
GET /api/thoughts: Get all thoughts
GET /api/thoughts/:id: Get a single thought by ID
POST /api/thoughts: Create a new thought
PUT /api/thoughts/:id: Update a thought by ID
DELETE /api/thoughts/:id: Delete a thought by ID
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought
Demo Video
A walkthrough video demonstrating the functionality of the API and meeting all acceptance criteria can be found here. Please ensure that you include a link to your demo video in the README of your project.

### Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Deliverables: 10%
Your GitHub repository containing your application code.
Walkthrough Video: 37%
A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.

The walkthrough video must show all of the technical acceptance criteria being met.

The walkthrough video must demonstrate how to start the application’s server.

The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.

The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.

The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.

Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Uses the Mongoose packageLinks to an external site. to connect to a MongoDB database.

Includes User and Thought models outlined in the Challenge instructions.

Includes schema settings for User and Thought models as outlined in the Challenge instructions.

Includes Reactions as the reaction field's subdocument schema in the Thought model.

Uses functionality to format queried timestamps properly.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to a walkthrough video.

