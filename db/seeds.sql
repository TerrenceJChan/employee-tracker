INSERT INTO department (name)
VALUES
('Production'),
('Legal'),
('Marketing'),
('Human Resource'),
('Accounting and Finance'),
('IT');


INSERT INTO role (title, salary, department_id)
VALUES
('Production Designer', 70000, 1),
('Lawyer', 90000, 2),
('Marketing Analyst', 70000, 3),
('Talent Management', 70000, 4),
('Accountant', 80000, 5),
('Computer Engineer', 100000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ('James', 'Fraser', 2, NULL),
 ('Banana', 'Man', 1, NULL),
 ('Banana', 'Man', 1, NULL),
 ('Banana', 'Man', 1, NULL),
 ('Banana', 'Man', 1, NULL),
 ('Banana', 'Man', 1, NULL),
 ('Robert', 'Bruce', 5, NULL),
 ('Peter', 'Greenaway', 6, NULL);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ('Derek', 'Jarman', 1, NULL),
 ('Paolo', 'Pasolini', 4, 1),
 ('Heathcote', 'Williams', 3, 2),
 ('Sandy', 'Powell', 5, 3),
 ('Sissy', 'Coalpits', 2, NULL),
 ('Antoinette', 'Capet', 4, 1),
 ('Samuel', 'Delany', 6, 2),
 ('Tony', 'Duvert', 5, 3),
 ('Dennis', 'Cooper', 1, 1),
 ('Monica', 'Bellucci', 3, 2),
 ('Jack', 'London', 3, 3),
 ('Samuel', 'Johnson', 4, 1);