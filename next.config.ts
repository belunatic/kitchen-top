import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,

	/* Setting up Content Security Policy (CSP) headers for security */
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; script-src 'self' 'unsafe-inline' https://github.githubassets.com https://github.com; connect-src 'self' https://github.com https://api.github.com; img-src 'self' https://avatars.githubusercontent.com data:; style-src 'self' 'unsafe-inline'; frame-src https://github.com;",
					},
				],
			},
		];
	},
};

export default nextConfig;
