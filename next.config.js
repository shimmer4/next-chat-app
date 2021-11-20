// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://shimmer4.github.io/next-chat-app/:path*',
            },
        ]
    },
};