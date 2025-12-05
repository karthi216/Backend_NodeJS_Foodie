const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const vendorRoutes = require('./routes/vendorRoutes');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');

dotEnv.config();

const app = express();

const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Static folder for images
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => console.log(error));

// Routes
app.use('/vendor', vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);

// Health / root route
app.get('/', (req, res) => {
  res.send("<h1>Welcome to FOODIE</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started and running at ${PORT}`);
});
