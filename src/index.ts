import program from 'commander';
import { getPackageManager, silentExec, getInstallCommand } from './lib';
import Listr from 'listr';
import execa from 'execa';

const packageManagerName = getPackageManager(process.env.npm_config_user_agent);
const installCommand = getInstallCommand(packageManagerName);

program
  .name('install-with-types')
  .usage('<pkg> [options]')
  .option('-D, --save-dev', 'save dev');

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ install-with-types eslint -D');
});

program.parse(process.argv);

(async () => {
  const dependencyName = program.args[0];
  if (dependencyName === undefined) return program.help();

  const isSaveDev = program.saveDev ? program.saveDev : false;

  const tasks =
    packageManagerName &&
    installCommand &&
    new Listr([
      {
        title: `Install ${dependencyName} to ${
          isSaveDev ? 'devDependencies' : 'dependencies'
        } with ${packageManagerName}`,
        task: () => {
          if (isSaveDev) {
            return execa(packageManagerName, [
              installCommand,
              dependencyName,
              '-D'
            ]);
          } else {
            return execa(packageManagerName, [installCommand, dependencyName]);
          }
        }
      },
      {
        title: `Search @types/${dependencyName}`,
        task: () => {
          const httpStatus: string = silentExec(
            `curl -s -o /dev/null -w '%{http_code}' https://www.npmjs.com/package/@types/${dependencyName}`
          );

          if (httpStatus !== '200') {
            throw new Error(`Could not find @types/${dependencyName}`);
          }
        }
      },
      {
        title: `Install @types/${dependencyName}`,
        task: () =>
          execa(packageManagerName, [
            installCommand,
            `@types/${dependencyName}`,
            '-D'
          ])
      }
    ]);

  if (tasks === undefined || tasks === '') return null;
  tasks.run();
})();

process.on('SIGINT', () => {
  console.log('');
  console.log('OK. See you later👋');

  process.exit();
});
