# Product Management API

A RESTful Product Management API built using Node.js and Express.js, with Mongoose integration for MongoDB.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Features
- Create a product
- Retrieve all products
- Update an existing product
- Delete a product
- JSON request and response handling
- Input validation

## Installation

Clone the repository:

```bash
git clone https://github.com/lakshitchoudhary137/product-management-api.git
```

Navigate into the project:

```bash
cd product-management-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
node server.js
```

Server runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Add a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## Testing

All API endpoints can be tested using Postman.

## Author

Lakshit Choudhary