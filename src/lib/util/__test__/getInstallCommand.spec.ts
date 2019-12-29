import { getInstallCommand } from '../getInstallCommand';

describe('getInstallCommand', () => {
  it('When package manager is npm, return install', () => {
    const packageManager = 'npm';

    const result = getInstallCommand(packageManager);

    expect(result).toBe('install');
  });

  it('When package manager is yarn, return add', () => {
    const packageManager = 'yarn';

    const result = getInstallCommand(packageManager);

    expect(result).toBe('add');
  });
});
