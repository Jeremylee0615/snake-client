const net = require("net");
const { IP, PORT, ID } = require("./constants");
const host = IP;
const port = PORT;
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("You just joined - " + "Host IP: [" + host + "] Port: [" + port + "].");
    conn.write(`Name: ${ID}`);
  });

  conn.on('data', () => {
    console.log(' You can\'t stay ded in warzone... 💀💀💀 In fact, you are actually ded 💀💀💀');
  });
 

  return conn;
};


module.exports = { connect };