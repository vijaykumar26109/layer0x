const express = require('express');
const mongoose = require('mongoose');
const blockchainRoutes = require('./routes/blockchain_routes');
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());

// use blockchain routes
app.use('/api', blockchainRoutes);

//database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(()=>{
    console.log("Error connecting to DB");
  })
  

//server connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
