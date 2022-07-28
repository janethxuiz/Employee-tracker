const { query } = require("express");
const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");
require("console.table");


function choosePromt() {
    inquirer.prompt([
        {
            type: 'list'
            name: 'choice'
            message: 'what would you like to do?'
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role'
            ]
        }
    ]).then(function (answer) {
        switch (answer.choice) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add A Departments':
                addDepartment();
                break;
            case 'Add A Role':
                addRole();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update An Employee Role':
                updateRole();
                break;
        }
    })
};

function viewDepartments() {
    connection.query('SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id',
    function(err, res) {
        if(err)throw err
        console.table(res)
        choosePromt()
    })
};

function viewRoles() {
    connection.query('SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id',
    function(err, res) {
        if(err)throw err
        console.table(res)
        choosePromt()
    })
};

function viewEmployees() {
    var 
}

function addDepartment() {
    inquirer.prompt([
        {
            name: 'addDepartment',
            type: 'input',
            message: 'Which department would you like to add?'
        }
    ]).then(function(choice) {
        connection.query('INSERT INTO department SET ?', {
            name: choice.addDepartment
        });
        var query = 'SELECT * FROM department';
        connection.query(query,function(err, res) {
            if(err)throw err;
            console.log('Your Department has been added!');
            console.table('All Departments:', res);
        })
    })
};

function addRole() {
    inquirer.prompt([
        {
            name: 'addRole',
            type: 'input',
            message: 'Which role would you like to add?'
        },
        {
            name: 'Salary',
            type: 'input',
            message: 'What is the salary for this role?'
        },
        {
            name: 'Department',
            type: 'input',
            message: 'What department is this role in?'
        }
    ]).then(function(choice) {
        connection.query('')
    })
};

function addEmployee

function updateRole