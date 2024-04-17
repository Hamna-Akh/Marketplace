# Marketplace

## Description
Marketplace is a platform that allows users to buy and sell products online. Users can sign up, sign in, create product listings, update their listings, and view products listed by other users. The application also provides a dashboard with key sale metrics, such as category distribution and average sale price.

## Features
Sign Up/In: Users can sign up and sign in to the platform.

Product management: Users can create, update, and delete their product listings.

Product browsing: Users can view all products listed on the platform, including their own and other users'.

Dashboard: Users have access to a dashboard displaying key sale metrics.

Messaging (future implementation): Planned feature to enable users to communicate with each other.

## Technologies Used
### Frontend:
React.js: JavaScript library for building user interfaces.

Material-UI: React components for faster and easier web development.

Chart.js: Simple yet flexible JavaScript charting library.

Axios: Promise-based HTTP client for making API requests.

### Backend:
Node.js: JavaScript runtime environment for server-side development.

Express.js: Web application framework for Node.js.

MySql: SQL database for storing user and product data.

## Installation
Clone the repository
#### Set Up the Database:
Ensure that MySQL is installed on your machine.

Open the application.properties file in the backend directory.

Configure the database connection properties such as spring.datasource.url, spring.datasource.username, and spring.datasource.password according to your MySQL configuration.

Populate the databse by running marketplace.sql followed by dummydata.sql in MySql.
#### Frontend:
Navigate to the project directory: cd marketplace

Install dependencies: npm install

Start the development server: npm start

Open your browser and navigate to http://localhost:3000 to view the application.
#### Backend:
Run MarketplaceApplication

## Future Enhancements
Implement messaging feature to enable communication between users.
Enhance user interface and user experience based on user feedback.

## Authors

| Name  |
| ----- |
| Gilles Isaac Tiesse  |
| Ada Andrei  |
| Hamna Akhter |
