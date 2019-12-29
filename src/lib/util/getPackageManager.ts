/**
 * Get running package manager's name.
 */
export const getPackageManager = (userAgent: string | undefined) => {
  if (userAgent === undefined) return;
  const packageManager = userAgent?.split('/')[0];

  return packageManager;
};
