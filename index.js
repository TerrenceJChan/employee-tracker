require('dotenv').config(); // IMPORTANT: There must be a .env file in the root directory with proper MySQL credentials for this app to work. Please edit and rename .sample-env to .env

const welcome = require('./src/welcome');
const main = require('./src/main');

const app = async () => {
    // Displays welcome graphic
    welcome();

    // Starts main loop
    await main();
};

// Initializes the app
app();