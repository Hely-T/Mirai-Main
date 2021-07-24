const request = require('request');
const fs = require('fs')
      var ytdl = require("ytdl-core");
    
module.exports.config = {
  name: "fbmp3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "",
  commandCategory: "Media",
  usages: "/fbmp3 [link video] dạng 1000xxxx/video/idviddeo",
  cooldowns: 10,
  dependencies: ["request","fs", "node-cmd", "ytdl-core", "facebook-tools"]
};

module.exports.run = async({api,event,args,client,Users,__GLOBAL,Currencies}) => {
var facebookTools = require('facebook-tools');
const name = args.join(" ")
  videoObj = await facebookTools.getVideoUrl(name);
  var callback = () => api.sendMessage({body: `Hi ?`,attachment: fs.createReadStream(__dirname + "/src/1.m4a")}, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.m4a")); 
      return request(encodeURI(`${videoObj.sdLink}`)).pipe(fs.createWriteStream(__dirname+'/src/1.m4a')).on('close',() => callback());
       };

