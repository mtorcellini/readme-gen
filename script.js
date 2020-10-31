const inquirer = require('inquirer');
const fs = require('fs');

const init = async () => {
    let userAnswers = await getUserInput();
    let formattedText = formatText(userAnswers);
    makeFile(formattedText);
}

const getUserInput = async () => {
    let userAnswers = await inquirer.prompt([
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
            name : 'installation',
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
        },
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
    ]);

    return userAnswers;
}

// function for saving data to a readme.md file
const makeFile = (fileText) => {
    fs.writeFile('./output/readme.md', fileText, (err) => {
        if (err) throw err;
    });
}

const formatText = (data) => {
    let licenseText = 'sample license text';

    let text = `# ${data.title}\n`
    text += `## Description\n\n${data.description}\n\n`;

    // if toc, make toc here
    if (data.toc) {
        text += '## Table of Contents\n'
        text += data.installation ? '- [Installation](#installation)\n' : '';
        text += '- [Usage](#usage)\n';
        text += '- [License](#license)\n';
        text += data.contribution ? '- [Contribution Guidelines](#contribution-guidelines)\n' : '';
        text += data.tests ? '- [Tests](#tests)\n\n' : '';
    }

    text += data.installation ? `## Installation\n\n${data.installation}\n\n` : '';
    text += `## Usage\n\n${data.usage}\n\n`;
    text += `## License\n\n${licenseText}\n\n`
    text += data.contribution ? `## Contribution Guidelines\n\n${data.contribution}\n\n` : '';
    text += data.tests ? `## Tests\n\n${data.tests}\n\n` : '';

    return text;
}

init();
