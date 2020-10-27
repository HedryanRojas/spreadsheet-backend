# SpreadSheet

This project aims to create a web spreadsheet where users can perform the basic operations that can be performed in others spreadsheets like google sheets, this data will be stored and it could be accessible by the user who has created it later if the user wants to.

This repo is the backend part of this proyect.
[Live demo](https://rojas96.github.io/spreadsheet-frontend/#/)
# Supported Use-Cases

  - System must support at least 1000 rows and 1000 columns.
  - Users can cut, copy, paste and delete cells individually or by range.
  - Each cell will support only text or numbers.
  - System must perform this operations:  addition( + ),  subtraction ( - ),  multiplication( * ),  division( / ), exponentiation ( ^ )  keeping the evaluation precedence when it has parentesys. Example (1 + 2) * 3  = 9. 
  - These functions will be available: Sum, Multiplicative, Calculate the largest number, Calculate the smallest number,
  - Calculate the mean, Standard deviation, Variance, Mode, Median.
  - System could combine math operations in order to create more complex operations.
  - System must support multiple users.
  - Each user will be able to create as many spreadsheets as the user wants but each spreadsheet only will have 1 sheet in it.
  - User will be able to delete any spreadsheet that user does not need anymore 

# Out of scope

   - Offline working 
   - Search functionality
   - Cell range selection dragging mouse pointer over them

### Tech

spreadsheet uses a number of open source projects to work properly:

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js!
* [Hapi/boom](https://github.com/hapijs/boom#readme) - HTTP-friendly error objects.
* [Hapi/joi](https://www.npmjs.com/package/@hapi/joi) -The most powerful schema description language and data validator for JavaScript. (deprecated)
* [Mongodb](https://www.mongodb.com/) - A general purpose, document-based, distributed database

### Installation

Requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd spreadsheet-backend
$ cp .env.example .env  
$ npm install -d
```
Before start you need to add mongodb  credentials to .env file
```sh 
$ npm start
```

### Todos

 - Add CD/CI pipeline. 
 - Migrate @Hapi/Joi since it is deprecated.
 - Support Mysql as database alternative too.
