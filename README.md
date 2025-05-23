# Remind-Me-Later API

A simple REST API for scheduling reminders with SMS/Email notifications (notification logic not implemented). Built with Node.js, Express, and MongoDB.

## Features

- Create reminders with specific date/time
- Store reminders in MongoDB
- Choose notification method (SMS/Email)
- Simple validation for input data
- Error handling for common scenarios

## Requirements

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm

## Getting Started

### 1. Clone the repository
git clone https://github.com/yourusername/remind-me-later.git
cd remind-me-later

Install dependencies
npm install

Set up environment variables
Create a .env file in the root directory:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/remind-me-later

node server.js
