const { UPKEY, DOWNKEY, LEFTKEY, RIGHTKEY, TAUNTS } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = key => {

    if (key === '\u0003') {
      console.log("πππRetreating from the warzone of π...πππ ");
      process.exit();
    } else if (TAUNTS[key]) {
      conn.write(TAUNTS[key]);
    } else if (key === UPKEY) {
      conn.write('Move: up');
    } else if (key === DOWNKEY) {
      conn.write('Move: down');
    } else if (key === LEFTKEY) {
      conn.write('Move: left');
    } else if (key === RIGHTKEY) {
      conn.write('Move: right');
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

module.exports = { setupInput };