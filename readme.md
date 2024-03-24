### GyanGrove API

A RESTful service that manages and queries event data based
on a user's geographical location and a specified date. This service will ingest data from a provided CSV dataset and then offer an API to find events for users

## Table of Contents
- [Installation](#installation)
- [Install PostgreSQL](#install-postgresql)
- [Create .env File](#create-env-file)
- [Prerequisites](#prerequisites)
- [Install Dependencies](#install-dependencies)
- [Install Nodemon (Development Dependency)](#install-nodemon-development-dependency)
- [Run the Project](#run-the-project)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/yourproject.git
   ```
## Install PostgreSQL

1. Download and install PostgreSQL from the official website: [PostgreSQL Downloads](https://www.postgresql.org/download/).

2. Follow the installation instructions provided for your operating system.

3. During the installation process, you may be prompted to set a password for the default `postgres` user. Make sure to remember this password as it will be needed to access the PostgreSQL server.

4. After installing PostgreSQL, make sure the PostgreSQL service is running. You can check the status and start the service using the following commands:

   ```sh
   # Check status
   sudo service postgresql status

   # Start the service if it's not running
   sudo service postgresql start
    ```
## Create .env File

1. Create a new file named `.env` in the root directory of your project.

2. Add the following configurations to the `.env` file:

   ```plaintext
   # POSTGRES DB CONFIGURATIONS
   DB_HOST = localhost
   DB_DATABASE = YourDatabaseName
   DB_USER = YourDatabaseUser
   DB_PASSWORD = YourDatabasePassword
   DB_PORT = 5432
   DB_SCHEMA = YourDatabaseSchema

   # your server port
   SERVER_PORT = 4040 

   DISTANCE_API_KEY = "YourDistanceApiKey"
   WEATHER_API_KEY = "YourWeatherApiKey"
    ```

## Prerequisites

Before running the application, make sure you have the following prerequisites installed on your system:

1. **Node.js**: If Node.js is not already installed on your system, you can download and install it from the official website: [Download Node.js](https://nodejs.org/). Follow the installation instructions provided for your operating system.

## Install Dependencies

1. After installing Node.js, navigate to the root directory of your project in the terminal.

2. Run the following command to install the project dependencies:

   ```sh
   npm install
    ```

## Install Nodemon (Development Dependency)

1. Nodemon is a helpful tool that automatically restarts the Node.js application when changes are detected in the files. It's commonly used during development to streamline the development process.

2. To install Nodemon as a development dependency, run the following command in the terminal at the root directory of your project:

   ```sh
   npm install --save-dev nodemon
    ```

## Run the Project

1. After installing the project dependencies, you can start the application by running the following command in the terminal at the root directory of your project:

   ```sh
   npm start
    ```