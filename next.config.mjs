const nextConfig = {
	reactStrictMode: true,

	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value: [
							"default-src 'self';",
							"script-src 'self' 'unsafe-inline';",
							"connect-src 'self' https://github.com https://api.github.com;",
							"img-src 'self' https://avatars.githubusercontent.com data:;",
							"script-src-elem 'self' 'unsafe-inline';",
							"style-src 'self' 'unsafe-inline';",
							"form-action 'self' https://github.com;", // Crucial for OAuth redirects
							"frame-src 'self' https://github.com;",
						].join(" "),
					},
				],
			},
		];
	},
};

export default nextConfig;
