module.exports = {
	config: {
		name: "groupname",
		version: "1.0",
		author: "YourName",
		countDown: 3,
		role: 1,
		description: "Change the group name",
		category: "box chat",
		guide: {
			en: "{pn} <new group name>"
		}
	},

	onStart: async function ({ message, args, threadsData }) {
		if (!args.length) {
			return message.reply(
				"❌ الاستعمال الصحيح:\n" +
				"groupname <اسم المجموعة الجديد>\n\n" +
				"مثال:\n" +
				"groupname مجموعة الأصدقاء"
			);
		}

		const newName = args.join(" ").trim();

		if (!newName) {
			return message.reply("❌ خاصك تدخل اسم جديد للمجموعة.");
		}

		try {
			await threadsData.set(
				message.threadID,
				{ threadName: newName }
			);

			return message.reply(
				`✅ تم تغيير اسم المجموعة بنجاح.\n\n📌 الاسم الجديد: ${newName}`
			);
		} catch (error) {
			console.error("groupname error:", error);
			return message.reply(
				"❌ وقع خطأ أثناء تغيير اسم المجموعة.\n" +
				"تأكد أن البوت عنده صلاحية تغيير اسم المجموعة."
			);
		}
	}
};
