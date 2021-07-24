const request = require('request');
const fs = require('fs')
const axios = require('axios')
module.exports.config = {
  name: "spank",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Action",
  usages: "slap",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,__GLOBAL,Currencies}) => {
	if (args.join().indexOf('@') !== -1){
	 mentions = Object.keys(event.mentions)
  console.log(mentions)}
	let tag = await api.getUserInfo(mentions);
    let name = await tag[mentions].name;
    let tagg = await api.getUserInfo(event.senderID);
    let namee = await tagg[event.senderID].name;
  
 
let { data } = await axios.get('https://nekos.life/api/v2/img/spank');
 var callback = () => api.sendMessage({body:`${namee} tét mông ${name}`,attachment: fs.createReadStream(__dirname + "/src/1.GIF")}, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.GIF"));	
      return request(encodeURI(`${data.url}`)).pipe(fs.createWriteStream(__dirname+'/src/1.GIF')).on('close',() => callback());
		
		};