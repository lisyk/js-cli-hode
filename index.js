const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const log = console.log

clear();

log(
    chalk.yellow(
        figlet.textSync('Ginit', { horizontalLayout: 'full' })
    )
);

if (files.directoryExists('.git')) {
    log(chalk.bold.blue("Github repo already exists"));
    process.exit();
}