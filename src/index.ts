import { Command } from 'commander';
import { create } from './commands/create'; // Adjust the import path if necessary
import { logger } from './logger';

const program1 = new Command();
const program2 = new Command();

program1.option('--first').option('-s, --separator <char>');
program1.parse();

const options = program1.opts();
const limit = options.first ? 1 : undefined;

logger.info('Application started successfully');
console.log(program1.args[0].split(options.separator, limit));

program2.name("write-json-to-file").description("Add components and dependencies to your project");
program2.addCommand(create);

program2.parse();


// Run with npm:
// npm run build
// npm run start -- -s / --first a/b/c
// npm run start create --fileName test

// Run with pnpm:
// pnpm run build
// pnpm run start -s / --first a/b/c
// npm run start create --fileName test