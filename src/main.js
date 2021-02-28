// import inquirer from 'inquirer';
// import mysql from 'mysql2';
// import display from 'console.table';

const inquirer = require("inquirer");

const main = () => {
    // Main menu selection
    inquirer
        .prompt(
            {
                name: 'mainMenu',
                type: 'list',
                message: 'What license do you want to publish this project under? (Use arrow keys to navigate, use enter key to select)',
                choices: ['View all employees', 'Add an employee', 'View all roles', 'Add a role', 'Update an employee role', 'View all departments', 'Add a department']
            }
        )
        .then(({mainMenu}) => {
            switch (mainMenu) {
                case 'View all employees':
                    //Code
                    break;
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
            }
        });
}

module.exports = main;