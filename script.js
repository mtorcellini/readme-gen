const inquirer = require('inquirer');

// function for getting user input

const getUserInput = () => {
    inquirer.prompt([
        {
            type : 'input',
            message : 'title: ',
            name : 'title'
        },
        {
            type : 'input',
            message : 'descripton: ',
            name : 'description'
        },
        {
            name : 'input',
            message : 'installation instructions: ',
            name : 'installation'
        },
        {
            type : 'input',
            message : 'usage: ',
            name : 'usage'
        },
        {
            type : 'input',
            message : 'contribution guidelines: ',
            name : 'contribution',
            default : null
        },
        {
            type : 'input',
            message : 'test instructions: ',
            name : 'tests',
            default : null
        },
        {
            type : 'list',
            message : 'choose a license: ',
            choices : ['ISC', 'MIT', 'GNU'],
            name : 'license'
        },
        {
            type : 'input',
            message : 'your name as you want it to appear in the license: ',
            name : 'authorName'
        }
        {
            type : 'input',
            message : 'github username: ',
            name : 'username'
        },
        {
            type : 'confirm',
            message : 'do you require a TOC? ',
            name : 'toc',
            default : false
        }
    ])
}

// function for saving data to a readme.md file

getUserInput();