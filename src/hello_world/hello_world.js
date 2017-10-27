import { GitProcess } from 'dugite';

export const greet = () => {
  return 'Hello World!';
};

export const bye = () => {
  return 'See ya!';
};

export async function gitVersion() {
  const result = await GitProcess.exec(['--version'], '');
  return result.stdout;
}