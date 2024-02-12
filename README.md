# Vite React Todo App

This is a simple Todo application built with Vite.js and React.js. The app allows users to manage their todos, including creating new ones, marking them as completed, updating, and deleting them. Users must be logged in to access the app.

The website is hosted on [Vercel](https://vercel-todo-obi.vercel.app).

## Features

- **Authentication**: Users must log in to access the application. There are separate pages for login and signup.
- **Home Page**: Displays a list of todos for the logged-in user.
- **Filtering and Sorting**: Users can filter todos based on completion status and sort them by name or time created.
- **Create Todo**: Users can create new todos at the `/add-todo` route.
- **View Todo Details**: Todos can be viewed individually using the `/get-todo/:todoId` route.
- **Update Todo**: Users can update existing todos using the `/update-todo/:todoId` route.
- **Mark as Completed**: Users can mark todos as completed directly from the home page.
- **Delete Todo**: Users can delete todos directly from the home page.

## Usage

To run the application locally, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/vite-react-todo-app.git

css
Copy code

2. Navigate to the project directory:

cd vite-react-todo-app

markdown
Copy code

3. Install dependencies:

npm install

markdown
Copy code

4. Start the development server:

npm run dev

markdown
Copy code

5. Visit `http://localhost:3000` in your browser to access the application.

## API Endpoints

- **Login**: `/login` - POST request with user credentials.
- **Signup**: `/signup` - POST request to create a new user.
- **Get Todos**: `/todos` - GET request to fetch todos for the logged-in user.
- **Add Todo**: `/add-todo` - POST request to add a new todo.
- **Get Todo**: `/get-todo/:todoId` - GET request to fetch details of a specific todo.
- **Update Todo**: `/update-todo/:todoId` - PUT request to update a todo.
- **Delete Todo**: `/delete-todo/:todoId` - DELETE request to delete a todo.
- **Mark Todo as Completed**: `/mark-completed/:todoId` - PUT request to mark a todo as completed.

## Technologies Used

- [Vite.js](https://vitejs.dev/) - Frontend build tool.
- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - Routing library for React.
- [axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JSON Web Token implementation for Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Library to hash passwords.
- [Express.js](https://expressjs.com/) - Backend framework for handling API requests.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing user data and todos.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.
