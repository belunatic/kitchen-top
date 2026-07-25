import nodemailer from "nodemailer";

// Reusable nodemailer setup — keep this file under src/pages/api so it's only used server-side
export const transporter = nodemailer.createTransport({
	// host: process.env.SMTP_HOST,
	// port: Number(process.env.SMTP_PORT),
	// secure: true,
	service: "gmail",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});
