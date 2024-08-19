import { Command } from 'commander';
import prompts from 'prompts';
import ora from 'ora';

export const create = new Command() .name("create")
  .description("Create a file with JSON content")
  .argument("fileName", "The file name to create")
  .action(async (fileName: string, opts: any) => {
    const options = await prompts([
      {
        type: "toggle",
        name: "create",
        message: 'Would you like to create a file with JSON content?',
        initial: true,
        active: "yes",
        inactive: "no",
      }
    ]);
    console.log("Create file:", options.create);
    if (options.create) {
      // Create and start a spinner
      const spinner = ora('Starting the file creation process...').start();
      
      // Simulate a task
      setTimeout(() => {
          spinner.succeed('File creation completed!');
          // You can replace the setTimeout with actual logic
      }, 2000); // Simulate a 2-second task
    }

    // Run with npm:
    // npm run build
    // npm run start create --fileName test
    // choose 'yes' for prompt
    // the spinner will show
  });