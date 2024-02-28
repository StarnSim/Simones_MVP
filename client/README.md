# Boop the Snoot

This full-stack MVP is a dog daycare management app designed to facilitate registration and appointment booking for pet owners. Admin users have the capability to oversee and track the scheduled appointments.

### Key Features
- Streamlined registration and booking process
- Real-time tracking of scheduled appointments
- Intuitive interface for pet owners and administrators

### Technologies Used
- React (^18.2.0)
- HTML5
- CSS3
- JavaScript (ES6)
- ReactRouter (^6.14.2)
- MySQL (8.3.0)
- Node.js (21.6.1)
- Express.js (4.16.1)
### Setup
Ensure you have Node.js installed. Boop the Snoot is developed with Node.js and uses it as the runtime environment. You can check your Node.js version by running node -v in your terminal. If you don't have Node.js installed, you can download it from the official website.
### Dependencies
Run npm install in the project directory. This will install server-related dependencies such as express.
cd client and run npm install. This will install client dependencies (React).

### Database Prep
Access the MySQL interface in your terminal by running mysql -u root -p, and adding your password.
Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user. 

For example:
```
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=daycare
  DB_PASS=YOURPASSWORD
```

Run the following commands to your MySQL console: ```CREATE DATABASE daycare;``` and then ```USE daycare;```

Run ```npm run migrate``` in the project folder of this repository, in a new terminal window. This will create two tables in your database: "dogs" and "bookings"

Make sure you understand how the tables are constructed. In your MySQL console, you can run ```DESCRIBE tablename;``` to see the structure of each table. Please note that "tablename" in ```DESCRIBE tablename``` needs to be replaced by the name of the table that you want to describe ie "dogs" or "bookings"

### Development
Run ```npm start``` in project directory to start the Express server on port 4000. It's recommended to use nodemon for automatic server restarts during development. If you don't have nodemon installed, you can install it globally using ```npm install -g nodemon.```
In another terminal window, navigate to the client directory (cd client) and run ```npm run dev``` to start the client in development mode with hot reloading in port 5173.