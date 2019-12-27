import { getPackageManager } from './lib';

console.log(getPackageManager(process.env.npm_config_user_agent));

import program from 'commander';

program
  .name('install-with-types')
  .usage('<pkg> [options]')
  .option('-D, --save-dev', 'save dev');

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ install-with-types shelljs -D');
});

program.parse(process.argv);

console.log(program);
