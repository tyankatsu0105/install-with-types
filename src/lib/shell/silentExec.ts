import { exec } from './exec';

export const silentExec = (command: string) => {
  const result = exec(command, { silent: true });
  return result;
};
