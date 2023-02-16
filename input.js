const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input);
  });
  return stdin;
};

module.exports = { setupInput };