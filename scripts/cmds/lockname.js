module.exports = {
	config: {
		name: "lockname",
		version: "1.0",
		author: "YourName",
		countDown: 3,
		role: 1,
		description: "Lock the group name",
		category: "box chat",
		guide: {
			en: "{pn}"
		}
	},

	onStart: async function ({ api, event, message }) {
		global.lockName ??= {};

		try {
			const info = await api.getThreadInfo(event.threadID);

			global.lockName[event.threadID] = {
				name: info.threadName || "",
				locked: true
			};

			return message.reply(
				`🔒 تم تفعيل حماية اسم المجموعة.\n\n` +
				`📌 الاسم المحمي: ${info.threadName || "بدون اسم"}`
			);
		} catch (error) {
			console.error(error);
			return message.reply("❌ تعذر تفعيل حماية اسم المجموعة.");
		}
	}
};
