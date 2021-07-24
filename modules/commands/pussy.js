const request = require('request');
const fs = require('fs')
const axios = require('axios')
module.exports.config = {
  name: "pussy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Nsfw",
  usages: "walmp",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,__GLOBAL,Currencies}) => {

let { data } = await axios.get('https://nekos.life/api/v2/img/pussy_jpg');
 var callback = () => api.sendMessage({body:`j code by HungCho`,attachment: fs.createReadStream(__dirname + "/src/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.jpg"));	
      return request(encodeURI(`${data.url}`)).pipe(fs.createWriteStream(__dirname+'/src/1.jpg')).on('close',() => callback());
		
		};