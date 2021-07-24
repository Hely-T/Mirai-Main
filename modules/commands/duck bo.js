const request = require('request');
const fs = require('fs')
const axios = require('axios')
module.exports.config = {
  name: "po",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Hình Ảnh",
  usages: "po",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	axios.get("https://api.berver.tech/duckbo").then(res => {

        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/src/cosplay.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/src/cosplay.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/src/cosplay.${ext}`)).on("close", callback);
      })
      }
	  
