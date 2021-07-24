module.exports.config = {
  name: "randomemoji",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Thay tên nhs chat.",
  commandCategory: "Random",
  usages: "boxname [name]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
			var emoji = ['😐', '❤️', '🤣', '🐶', '😊', '😉', '🤢', '😅', '👌', '👿', '👀', '🦋',];
			return api.changeThreadEmoji(emoji[Math.floor(Math.random() * emoji.length)], event.threadID, (err) => (err) ? api.sendMessage(getText('error'), event.threadID, event.messageID) : '');
		}