const request = require('request');
const fs = require('fs')
const axios = require('axios')
module.exports.config = {
  name: "pornn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Hình ảnh",
  usages: "hug",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,__GLOBAL,Currencies}) => {

 
let { data } = await axios.get('http://nsfw.eliric.io/api.php?key=ConCuBeBe');
 		    var shortLink = await require("tinyurl").shorten(`${data.link}`);
		 api.sendMessage(shortLink, event.threadID);
		}