// import { getPackageManager } from './lib';

// console.log(getPackageManager(process.env.npm_config_user_agent));

import program from 'commander';

program
  .name('install-with-types')
  .usage('<pkg> [options]')
  .option('-D, --save-dev', 'save dev')
  .parse(process.argv);

if (program['saveDev']) console.log('you use -D option');
