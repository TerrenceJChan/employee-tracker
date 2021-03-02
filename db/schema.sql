DROP DATABASE IF EXISTS organization_db;
CREATE DATABASE organization_db;
USE organization_db;

CREATE TABLE department(
    id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role(
    id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER UNSIGNED NOT NULL,
    
    PRIMARY KEY(id),
    INDEX (department_id),
    
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE CASCADE
);

CREATE TABLE employee(
    id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED NOT NULL,
    manager_id INTEGER UNSIGNED,
    
    PRIMARY KEY(id),
    INDEX (role_id),
    INDEX (manager_id),

    FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE CASCADE,

    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE SET NULL
);