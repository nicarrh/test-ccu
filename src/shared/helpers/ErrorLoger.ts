import pc from 'picocolors';

function log(message: string): void {
  console.log(pc.red(message));
}

export default {
  log,
};
