// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: 'https://shimmer4.github.io/:path*',
                destination: 'https://shimmer4.github.io/next-chat-app/:path*',
            },
        ]
    },
};