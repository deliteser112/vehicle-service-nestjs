# NestJS Task Project

This project is a NestJS application developed for a task as part of an interview process. It includes features for parsing XML data, transforming it into JSON format, storing it in MongoDB, and exposing a GraphQL endpoint to access the transformed data.

## Features

- Parse XML data from external APIs.
- Transform XML data into JSON format.
- Store transformed data in MongoDB.
- Expose a GraphQL endpoint to query the transformed data.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (recommended version: 14.x)
- [MongoDB](https://www.mongodb.com/) (Make sure MongoDB is installed and running locally or accessible remotely)
- [Docker](https://www.docker.com/get-started) (optional, for Dockerizing the application)

## Getting Started

To get a local copy up and running follow these steps:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/your_project.git
   cd your_project
2. Install dependencies:
   npm install
3. Set up environment variables:
   MONGODB_URI=mongodb://localhost:27017/vehicle_db
   PORT=3000

### Running the Application

  To run the application locally:
    npm run start
  The application will be accessible at http://localhost:3000.

### Docker

1. Build the Docker image:
  docker build -t nestjs-app .

2. Run the Docker container:
  docker run -d -p 3000:3000 nestjs-app
  The application will be accessible at http://localhost:3000.

### Testing

  npm run test

### API Documentation

  http://localhost:3000/graphql
  Use this interface to interact with the GraphQL API and explore available queries.

  