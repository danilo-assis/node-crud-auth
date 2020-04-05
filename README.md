# About
A Node.js boilerplate project with simple CRUD and User Authentication endpoints.
This project is separated in backend and frontend directories.

# Usage
On "backend" directory, to install the dependencies, run:
```sh
$ npm install
```

On "backend" directory, to start the server  (on port 3000), run:
```sh
$ npm start
```

Create a ".env" file on "backend" root folder containing the following template, changing the variables between "<>":
```
MONGODB_URL=<your_mongodb_url>
JWT_KEY=<your_random_jwt_key>
PORT=<port>
```
