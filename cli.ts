import esr from 'escape-string-regexp'

if (process.argv.length != 3) {
  console.error('USAGE: escape-string-regexp-cli some-text');
  process.exit(1);
}

let output = esr(process.argv[2]);
console.log(output)
