require('dotenv').config();

const welcome = require('./src/welcome');
const main = require('./src/main');

const app = async () => {
    // Displays welcome graphic
    welcome();

    // Starts main loop
    await main();
};

app();