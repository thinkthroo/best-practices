import { Command } from 'commander';
import { create } from './commands/create'; // Adjust the import path if necessary

const program = new Command();

program.option('--first').option('-s, --separator <char>');

program.name("write-json-to-file").description("Add components and dependencies to your project");
program.addCommand(create);

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;

console.log(program.args[0].split(options.separator, limit));

// Run with npm:
// npm run build
// npm run start -- -s / --first a/b/c
// npm run start create --fileName test

// Run with pnpm:
// pnpm run build
// pnpm run start -s / --first a/b/c
// npm run start create --fileName test