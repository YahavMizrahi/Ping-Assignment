const exec = require("child_process").exec;
const db = require("../../services/mySql_db");


const getTopFivePings = async (req, res, next) => {
  const sql =
    "SELECT COUNT(ping) AS count,host FROM ping GROUP BY host ORDER BY count DESC LIMIT 5;";
  const [topFive, _] = await db.execute(sql);
  res.status(200).json({ topFive });
  return topFive;
};

const postPingCommand = (req, res) => {
  const host = req.body["ping"];
  let flag = false;
  exec(`ping ${host}`, (error, stdout, stderr) => {
    const pong = stdout;
    let [, host, ping] = pong.split(" ");
    ping = ping.substring(1, ping.length - 1);
    if (ping.match(/((\d{1,3}.?){4}|(www.)?\w*\.\w*)/g)) {
      addPingPongToDB(host, ping);
      flag = !flag
    }
    
    res.send({ pong,flag });
  });
};

const addPingPongToDB = async (host, ping) => {
  let sql = `INSERT INTO ping(ping,host) VALUES('${ping}','${host}');`;
  const [allPings, _] = await db.execute("SELECT * FROM ping;");
  const pingExist = allPings.filter((p) => {
    return p.ping === ping
  });
  if (pingExist.length == 0) {
    const [newPing, _] = await db.execute(sql);

    return newPing;
  }
  return;
};

module.exports = { postPingCommand, getTopFivePings };
