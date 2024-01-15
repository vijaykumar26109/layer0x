Blockchain API
Welcome to the Blockchain API project! This API allows you to monitor and manage the status of various blockchains through their respective RPC endpoints.

Getting Started
Make sure you have the following installed:

Node.js
MongoDB
install dependencies
npm install

Start the server
npm start

API Endpoints

GET /blockchains: Get a list of all configured blockchains. 
POST /blockchains: Create a new blockchain. 
PUT /blockchains/:id: Update an existing blockchain. 
DELETE /blockchains/:id: Delete an existing blockchain. GET /status: Get the status of all blockchains.
