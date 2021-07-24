const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 5,
  dependencies: ["request","fs"]
};

module.exports.run = async({api,event,args,client,Users,__GLOBAL,Currencies}) => {
var callback = () => api.sendMessage({body:`梁Chủ bot梁\n\n👀 Tên: Đặng Văn Hùng\n👤 😶 Giới tính: Không xác định\n🐶 Username: hungchodz99\nDonate: 0351001241765(VCB))\nMomo\TSR:0395751524`,attachment: fs.createReadStream(__dirname + "/src/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100023326875133/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/src/1.png')).on('close',() => callback());
       };