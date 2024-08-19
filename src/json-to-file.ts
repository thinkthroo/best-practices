
// The write json to file has no clear step where to put the json object
// There is also no instruction how to run it
import fs from 'fs/promises';
import path from 'path';
import ora from 'ora';
import { logger } from './logger';

const config = {
    name: "example",
    version: "1.0.0",
    description: "A sample configuration file",
    author: "Your Name",
    license: "MIT"
};

const writeJsonToFile = async () => {
    logger.info("Starting the JSON write process...");
    const spinner = ora('Writing components.json...').start();
    const targetPath = path.resolve(process.cwd(), 'components.json');
    
    try {
        await fs.writeFile(targetPath, JSON.stringify(config, null, 2), 'utf8');
        spinner.succeed('Successfully wrote components.json');
    } catch (error) {
        spinner.fail('Failed to write components.json');
        logger.error(error.message);
    }
};

writeJsonToFile();
