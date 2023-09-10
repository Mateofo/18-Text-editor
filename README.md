# 21-BOOKS

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description

Welcome to the MERN Book Search Engine, a web application that allows you to search for books and manage your reading list. This project began as a RESTful API application and has been refactored to use GraphQL on the back end with an Apollo Server. It is built with the MERN stack, which includes a React front end, MongoDB database, and Node.js/Express.js server and API. With this application, you can search for books, save your favorite reads, and manage your reading list.


## Acceptance criteria
```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Getting started
To run this application locally and make modifications, follow these steps:

Clone the GitHub repository to your local machine.
Install the required dependencies for both the server and client.
npm install
npm run develop
Open your browser and go to http://localhost:3000 to access the application.

## Technologies Used
- React
- ode.js
- Express.js
- MongoDB
- GraphQL
- Apollo Server
- JWT (JSON Web Tokens)
- Heroku (for deployment)

## Contributing
- N/a

If you have any questions or need further assistance with the application, please contact me:

GitHub Profile: Mateofo
Email: mateofortiz@gmail.com

## Links
- Heroku: 
- Github: https://github.com/Mateofo/21-BOOKs.git

## License
This project is licensed under the MIT License 