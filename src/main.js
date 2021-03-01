const Database = require('../libs/Database')
const { testQuery } = require('./actions');

const inquirer = require('inquirer');
const display = require('console.table');

const main = async () => {
    const db = new Database({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })

    for (; ;) {
        // Main menu selection
        const { mainMenu } = await inquirer
            .prompt(
                {
                    name: 'mainMenu',
                    type: 'list',
                    message: 'MAIN MENU',
                    choices: ['View all employees', 'Add an employee', 'View all roles', 'Add a role', 'Update an employee role', 'View all departments', 'Add a department', 'Quit application']
                }
            );
        switch (mainMenu) {
            case 'View all employees':
                await testQuery(db);
                beak;r
            case 'Add an employee':
                // Code
                break;
            case 'View all roles':
                // Code
                break;
            case 'Add a role':
                // Code
                break;
            case 'Update an employee role':
                // Code
                break;
            case 'View all departments':
                // Code
                break;
            case 'Add a department':
                // Code
                break;
            case 'Quit application':
                console.log('Bye');
                await db.close();
                return;
        }
    }
}

module.exports = main;