import { getPackageManager } from '../getPackageManager';

describe('getPackageManager', () => {
  it('When run script with npm, get string "npm"', () => {
    const userAgent = 'npm/6.13.4 node/v12.13.0 darwin x64';

    const result = getPackageManager(userAgent);

    expect(result).toBe('npm');
  });

  it('When run script with yarn, get string "yarn"', () => {
    const userAgent = 'yarn/1.19.1 npm/? node/v12.13.0 darwin x64';

    const result = getPackageManager(userAgent);

    expect(result).toBe('yarn');
  });
});
