import { Command } from 'commander'; 

export const create = new Command() 
  .name("create") 
  .description("Create a new resource") 
  .argument("<fileName>", "the name of the file to create")    
  .action((fileName) => { 
    console.log(`Creating a new file named ${fileName}`)
});