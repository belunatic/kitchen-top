import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,

	/**
	 *
	 * @results This is a security measure to prevent clickjacking attacks. To fix this, you need to set the Content Security Policy (CSP) headers in your Next.js application to allow GitHub's OAuth callback URL to load inside your domain.
	 * @solution You can do this by adding the following code to your next.config.js file:
	 * @see https://nextjs.org/docs/api-reference/next.config.js/headers
	 */
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://github.githubassets.com https://github.com;
              connect-src 'self' https://github.com https://api.github.com;
              img-src 'self' https://avatars.githubusercontent.com data:;
              style-src 'self' 'unsafe-inline';
              frame-src https://github.com;
            `,
					},
				],
			},
		];
	},
};

export default nextConfig;
