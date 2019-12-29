/**
 * Get the install command, according to the package manager.
 */
export const getInstallCommand = (packageManager: string | undefined) => {
  if (packageManager === undefined) return '';
  switch (packageManager) {
    case 'npm':
      return 'install';
      break;

    case 'yarn':
      return 'add';
      break;

    default:
      break;
  }
};
