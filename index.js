// Require all npm packages and files
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    // questions to user using "inquirer"
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: 'input',
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: 'input',
        message: "How would you describe your project?",
        name: "description"
    },
    {
        type: 'input',
        message: "What do you need to install your project?",
        name: "install"
    },
    {
        type: 'input',
        message: "How would you be using the app?",
        name: "usage"
    },
    {
        type: 'list',
        message: "What license does your project need?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
        name: "license"
    },
    {
        type: 'input',
        message: "What does a user need to know to contribute to the project?",
        name: "contribution"
    },
    {
        type: 'input',
        message: "What command should be run to test?",
        name: "test"
    },
    {
        type: 'input',
        message: "How can the user use your repo?",
        name: "repo"
    }
];

function init() {
    inquirer
        //asking the questions
        .prompt(questions)
        //recording the answers
        .then(answers => {
            console.log(answers)
            //axious call to github to get the user's username
            axios.get("https://api.github.com/users/"+ answers.username)
            .then(data =>{
                console.log(data)
                fs.writeFile("generatereadme.md" , generateMarkdown(answers)+ function(err){
                    if(err){
                        console.log(err);
                    }
                    console.log("File Generated!");
                })

                // generateMarkdown(answers)
            })
        })

    // Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it.

}

init();
