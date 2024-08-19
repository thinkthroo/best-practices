import { Command } from 'commander'; import prompts from 'prompts';

export const create = new Command() .name("create")
  .description("Create a file with JSON content")
  .argument("fileName", "The file name to create")
  .action(async (fileName: string, opts: any) => {
    const options = await prompts([
      { type: "toggle",
        name: "create",
        message: 'Would you like to create a file with JSON content?',
        initial: true,
        active: "yes",
        inactive: "no",
      }
    ]);
    console.log("Create file:", options.create);
  });