// nodemailer configuration was intentionally moved to a server-only module
// at src/pages/api/nodemailer.ts to avoid bundling Node-only modules into the client.
// If client code imports this file by mistake, throw an explicit error at runtime.

export const transporter = {
	sendMail: () => {
		throw new Error(
			"Server-only transporter moved to src/pages/api/nodemailer. Use the server API route to send emails."
		);
	},
};
