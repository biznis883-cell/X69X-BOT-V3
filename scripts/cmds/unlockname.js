module.exports = {
	config: {
		name: "unlocknick",
		version: "1.0",
		author: "YourName",
		countDown: 3,
		role: 1,
		description: "Unlock group nicknames",
		category: "box chat",
		guide: {
			en: "{pn}"
		}
	},

	onStart: async function ({ event, message }) {
		global.lockNick ??= {};

		if (!global.lockNick[event.threadID]?.locked) {
			return message.reply("⚠️ حماية الكنيات غير مفعلة.");
		}

		delete global.lockNick[event.threadID];

		return message.reply("🔓 تم إيقاف حماية الكنيات.");
	}
};
