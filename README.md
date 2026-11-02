# Product Management API

A RESTful Product Management API built using **Node.js, Express.js, MongoDB, and Mongoose**. This project implements CRUD (Create, Read, Update, Delete) operations to manage product records stored in a MongoDB database.

## Features

- Create a new product.
- Retrieve all products.
- Retrieve a single product using its ID.
- Update an existing product.
- Delete a product.
- MongoDB Atlas database integration.
- Input validation using Mongoose.
- MVC (Model-View-Controller) architecture.
- JSON request and response handling.

## Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Backend web framework.
- **MongoDB Atlas** – Cloud database.
- **Mongoose** – MongoDB object modeling library.
- **Postman** – API testing tool.
- **Git and GitHub** – Version control and project hosting.

## Project Structure

```text
backend-tutorial/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── product.controller.js
│
├── models/
│   └── product.model.js
│
├── routes/
│   └── product.routes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### Folder Description

- **config/db.js:** Establishes the connection with MongoDB Atlas.
- **models/product.model.js:** Defines the product schema and database model.
- **controllers/product.controller.js:** Contains the CRUD business logic.
- **routes/product.routes.js:** Defines the API endpoints.
- **server.js:** Initializes Express, middleware, database connection, and the server.
- **.env:** Stores environment variables such as the MongoDB connection string.

## Product Schema

Each product contains the following fields:

| Field | Data Type | Description |
|---|---|---|
| name | String | Product name |
| price | Number | Product price |
| quantity | Number | Available quantity |
| createdAt | Date | Record creation time |
| updatedAt | Date | Last update time |

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/lakshitchoudhary137/product-management-api.git
```

### 2. Navigate to the project directory

```bash
cd product-management-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure MongoDB Atlas

Create a MongoDB Atlas cluster and obtain its connection string.

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your actual MongoDB Atlas connection string.

**Important:** Never upload your `.env` file or database credentials to GitHub.

### 5. Start the server

```bash
node server.js
```

If the database connection is successful, the terminal displays:

```text
MongoDB connected successfully!
Server running on port 3000
```

The API is now available at:

```text
http://localhost:3000
```

## API Endpoints

Base URL:

```text
http://localhost:3000/api/products
```

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product |

## API Testing with Postman

All endpoints can be tested using Postman.

### 1. Create a Product

**Method:** POST

**URL:**
```text
http://localhost:3000/api/products
```

**Body → raw → JSON:**

```json
{
  "name": "Laptop",
  "price": 55000,
  "quantity": 10
}
```

### 2. Retrieve All Products

**Method:** GET

```text
http://localhost:3000/api/products
```

### 3. Retrieve a Single Product

**Method:** GET

```text
http://localhost:3000/api/products/PRODUCT_ID
```

Replace `PRODUCT_ID` with the actual MongoDB ObjectId.

### 4. Update a Product

**Method:** PUT

```text
http://localhost:3000/api/products/PRODUCT_ID
```

**Body → raw → JSON:**

```json
{
  "name": "Gaming Laptop",
  "price": 75000,
  "quantity": 5
}
```

### 5. Delete a Product

**Method:** DELETE

```text
http://localhost:3000/api/products/PRODUCT_ID
```

Replace `PRODUCT_ID` with the actual MongoDB ObjectId.

## HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Product created successfully |
| 400 | Invalid request or product data |
| 404 | Product not found |
| 500 | Internal server error |

## Testing

The API was tested using Postman. CRUD operations were verified against the MongoDB Atlas database.

## Author

**Lakshit Choudhary**  
Computer Science and Engineering Student  
BML Munjal University

## GitHub Repository

https://github.com/lakshitchoudhary137/product-management-api