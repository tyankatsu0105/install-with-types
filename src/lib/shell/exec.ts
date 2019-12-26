import shell from 'shelljs';

export const exec = (command: string, { silent = false } = {}) => {
  const result = shell.exec(command, { silent }).stdout;

  return result;
};
