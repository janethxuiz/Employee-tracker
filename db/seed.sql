USE employee;

INSERT INTO department (name)
VALUES
('Finance'),
('Sales'),
('Marketing'),
('Developer');

INSERT INTO role (title, salary, department_id)
VALUES
('Accountant', 100000, 1),
('Sales Manager', 500000, 2),
('Product Manager', 350000, 2),
('Analyst', 400000, 4),
('Coding', 500000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Debra', 'Will', 2, ),
('Beth', 'Love', 4),
('Erik', 'Chad', 1),
('Steph', 'Bird', 1),
('Aronold', 'Hulk', 2),
('Alexis', 'Wee', 2);