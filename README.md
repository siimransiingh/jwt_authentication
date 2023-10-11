# **Node.js User Authentication API**

This is a simple Node.js API for user registration and login with authentication using JSON Web Tokens (JWT).

It includes endpoints for user registration and login. The API is built using Express.js and MongoDB as the database.
Prerequisites
Before you begin, ensure you have met the following requirements:

- [ ] Node.js installed on your system.
- [ ] MongoDB instance or MongoDB Atlas URL for database connectivity
- [ ] A .env file with the necessary environment variables

## Installation

1. Clone the repository:

bash
```console
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. Install dependencies:
```console
npm install
```

3. Set up the environment variables:

 Create a .env file in the project root and configure it with your settings. 
Use '.env.example' as a template.

```plaintext
MONGO_URI=your-mongodb-connection-string
```
4. Connect to the MongoDB database:

The MongoDB connection is set up using the database/database.js file. Make sure you have a MongoDB instance or a MongoDB Atlas URL configured in your .env file.

5. Start the server:
```console
npm start
```
## Usage
The API provides the following endpoints:

POST /register: Register a new user with a first name, last name, email, and password.

POST /login: Login with an email and password to receive a JWT token.

### Dependencies

**Express.js:** A minimal and flexible Node.js web application framework.

**Mongoose:** A MongoDB object modeling tool designed to work in an asynchronous environment.

**Bcrypt.js:** A library for hashing passwords.

**JSON Web Tokens (JWT):** Used for authentication and token-based user sessions.


