# Foodie Backend

## Overview
A MERN stack backend application for a FOODIE (food delivery/restaurant platform).

## Project Structure
```
Backend/
├── models/          # Database schemas
├── routes/          # API endpoints
├── controllers/     # Business logic
├── middleware/      # Authentication, validation
├── config/          # Configuration files
└── server.js        # Entry point
```

## Installation
```bash
npm install
```

## Environment Variables
Create a `.env` file:
```
MONGODB_URI=your_mongodb_connection
PORT=4000
JWT_SECRET=your_secret_key
```

## Running the Server
```bash
npm start
```

## API Endpoints
- **Users**: `/api/users`
- **Restaurants**: `/api/restaurants`
- **Orders**: `/api/orders`
- **Menu**: `/api/menu`

## Technologies
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## License
MIT

