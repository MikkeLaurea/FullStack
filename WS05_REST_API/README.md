# REST API Workshop

This project is part of a workshop where I learned how to build a RESTful API using Node.js, Express, and MongoDB.

## What I Did

- I set up a Node.js project and used Express to create a web server.
- I connected the project to a MongoDB database using Mongoose.
- I created a simple API that lets users:
  - Get all items
  - Get a single item by ID
  - Add a new item
  - Update an existing item
  - Delete an item
- I used Mongoose models to interact with the database.
- I tested the API using Postman to make sure all the routes work.
- I also added error handling to return useful messages if something goes wrong like an invalid ID or missing data.

## Tools Used

- Node.js
- Express
- MongoDB
- Mongoose
- Postman

## API Routes

The API supports the following routes:

- `GET /api/getall` – Get all items
- `GET /api/:id` – Get one item by ID
- `POST /api/add` – Add a new item
- `PUT /api/update/:id` – Update an item by ID
- `DELETE /api/delete/:id` – Delete an item by ID

