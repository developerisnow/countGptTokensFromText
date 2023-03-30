const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const { encode } = require('gpt-3-encoder');

readline.question(`Enter file path (or press enter to use default 'example.md'): `, (filepath) => {
  const filename = filepath || 'example.md';
  const content = fs.readFileSync(filename, 'utf-8');
  const encodedText = encode(content);
  const numTokens = encodedText.length;

  console.log(`The number of tokens in the file '${filename}' is ${numTokens}.`);
  readline.close();
});
