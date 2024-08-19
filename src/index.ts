import { Command } from 'commander';

const program = new Command(); program .option('--first') .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;

console.log(program.args[0].split(options.separator, limit));

// Run with npm:
// npm run build
// npm run start -- -s / --first a/b/c

// Run with pnpm:
// pnpm run build
// pnpm run start -s / --first a/b/c
