# Movie Management App

This  App allows users to view a list of movies, click on a movie to view its details, and manage the movie database by adding new movies with their respective genres. The app is built using React, Redux, Redux-Saga, and Express, and connects to a PostgreSQL database to store movie information.

## Features

- Display a list of movies with their posters and titles on the home page
- Click on a movie poster to view its details, including title, description, genres, and image
- Add a new movie to the database, complete with title, poster URL, description, and genre
- Utilizes Redux and Redux-Saga to manage state and handle side effects

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before running the project, you'll need to have the following installed:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installation

1. Clone this repository.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Create a new PostgreSQL database named `saga_movies_weekend`.
5. Use the SQL commands provided in the `database.sql` file to set up the required tables and sample data.
6. Run `npm run server` in your terminal to start the server.
7. In a separate terminal, run `npm run client` to start the React development server.
8. Open your browser and navigate to `http://localhost:3000`. The app should now be running and ready for use.

## Built With

- React
- Redux
- Redux-Saga
- Express
- PostgreSQL
- Axios
- React-Router-Dom

## Authors

Cory Anderson - (https://github.com/andydarknessb)

## Acknowledgments

- Thank you to [Prime Digital Academy](https://primeacademy.io/) for providing the project requirements and initial setup.