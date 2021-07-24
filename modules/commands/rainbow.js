module.exports.config = {
  name: "rainbow",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Thay tên nhs chat.",
  commandCategory: "Group",
  usages: "boxname [name]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const name = args.join(" ")
 if (isNaN(name)) return api.sendMessage(getText('isNaN'), threadID, messageID);
      if (name > 10) return api.sendMessage(getText('lessThan', '10000'), event.threadID, event.messageID);
      var color = ['196241301102133', '169463077092846', '2442142322678320', '234137870477637', '980963458735625', '175615189761153', '2136751179887052', '2058653964378557', '2129984390566328', '174636906462322', '1928399724138152', '417639218648241', '930060997172551', '164535220883264', '370940413392601', '205488546921017', '809305022860427'];
      for (var i = 0; i < name; i++) {
        api.changeThreadColor(color[Math.floor(Math.random() * color.length)], event.threadID)
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      return;
    }