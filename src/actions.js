// Connect to database
const inquirer = require('inquirer');

// Used for validating strings
const strValidation = (input) => {
    if (input.length < 30 && input.length > 0) {
        return true;
    } else {
        console.log(' Please enter a valid string that is 0 < 30 characters.');
        return false;
    }
}

// Displays all employees to display
const viewEmployees = async (db) => {
    const results = await db.query(`
    SELECT employee.id AS ID,
    employee.first_name AS "First Name",
    employee.last_name AS "Last Name", 
    role.title AS "Job Title",
    department.name AS Department,
    role.salary AS Salary, 
    CONCAT(e.first_name, " ", e.last_name) AS Manager 
    FROM employee INNER JOIN role ON role.id = employee.role_id 
    INNER JOIN department ON department.id = role.department_id
    LEFT JOIN employee e ON employee.manager_id = e.id
    ORDER BY ID ASC`);
    console.table(results);
};

// Adds new employees
const addEmployees = async (db) => {
    let roleData = await db.query(`SELECT id, title FROM role`); 
    let managerData = await db.query(`SELECT id, CONCAT(first_name, " ", last_name) AS Manager FROM employee`);
    managerData.push({ id: managerData.length + 1, Manager: 'None' }); // Employees can have no manager, thus a 'None' option is provided
    await inquirer
        .prompt([
            {
                name: 'fName',
                type: 'input',
                message: 'Please enter the new employee\'s FIRST NAME',
                validate: fName => {
                    return strValidation(fName);
                }
            },
            {
                name: 'lName',
                type: 'input',
                message: 'Please enter the new employee\'s LAST NAME',
                validate: lName => {
                    return strValidation(lName);
                }
            },
            {
                name: 'role',
                type: 'list',
                message: 'Please select the new employee\'s ROLE',
                choices: roleData.map(x => x.title) // This populates the choices with information from the database
            },
            {
                name: 'manager',
                type: 'list',
                message: 'Please select the new employee\'s MANAGER (if applicable)',
                choices: managerData.map(x => x.Manager)
            }
        ])
        .then(({ fName, lName, role, manager }) => {
            const roleId = roleData.find(x => x.title === role); // Matches the selection with its respecting id value
            // In the case that no manager is selected, the first result inserts the employee with a null value for their manager
            if (manager === 'None') {
                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [fName, lName, roleId.id, null]);
            } else {
                const managerId = managerData.find(x => x.Manager === manager);
                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [fName, lName, roleId.id, managerId.id]);
            }
        });
};

// Displays all roles
const viewRoles = async (db) => {
    const results = await db.query(`
    SELECT role.id AS ID,
    role.title AS "Job Title", 
    department.name AS Department,
    role.salary AS Salary  
    FROM role RIGHT JOIN department ON role.department_id = department.id
    ORDER BY ID ASC`);
    console.table(results);
};

// Adds a new role
const addRole = async (db) => {
    let departmentData = await db.query(`SELECT id, name FROM department`);
    await inquirer
        .prompt([
            {
                name: 'role',
                type: 'input',
                message: 'Please enter the role TITLE:',
                validate: role => {
                    return strValidation(role);
                }
            },
            {
                name: 'salary',
                type: 'number',
                message: 'Please enter the role\'s SALARY:',
                // Validates a positive integer for a role's salary
                validate: (salary) => {
                    if (!isNaN(salary) && salary > 0) {
                        return true;
                    } else {
                        console.log(' Please enter a valid integer.');
                        return false;
                    }
                }
            },
            {
                name: 'department',
                type: 'list',
                message: 'Please select the role\'s DEPARTMENT',
                choices: departmentData.map(x => x.name)
            }
        ])
        .then(({ role, salary, department }) => {
            const departmentId = departmentData.find(x => x.name === department);
            db.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [role, salary, departmentId.id]);
        });
};

// Updates an employee's role
const updateEmployeeRole = async (db) => {
    let employeeData = await db.query(`SELECT id, CONCAT(first_name, " ", last_name) AS Employee FROM employee`);
    let roleData = await db.query(`SELECT id, title FROM role`);
    await inquirer
        .prompt([
            {
                name: 'employee',
                type: 'list',
                message: 'Select EMPLOYEE to update:',
                choices: employeeData.map(x => x.Employee)
            },
            {
                name: 'role',
                type: 'list',
                message: 'Select ROLE to update to:',
                choices: roleData.map(x => x.title)
            }
        ])
        .then(({ employee, role }) => {
            const employeeId = employeeData.find(x => x.Employee === employee);
            const roleId = roleData.find(x => x.title === role);
            db.query(`UPDATE employee SET role_id = ${roleId.id} WHERE id = ${employeeId.id}`);
        })
};

// Displays all the departments
const viewDept = async (db) => {
    const results = await db.query('SELECT department.id AS ID, name AS Department FROM department');
    console.table(results);
};

// Adds a new department
const addDept = async (db) => {
    await inquirer
        .prompt(
            {
                name: 'department',
                type: 'input',
                message: 'Please enter the name of the new DEPARTMENT:',
                validate: department => {
                    return strValidation(department);
                }
            }
        )
        .then(({ department }) => {
            db.query(`INSERT INTO department (name) VALUES (?)`, [department]);
        })
};

// Exports all the different functions to be used as selections in the main menu
module.exports = { viewEmployees, addEmployees, viewRoles, addRole, updateEmployeeRole, viewDept, addDept };