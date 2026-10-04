module.exports = {
  apps: [
    {
      name: 'astro-bot',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '100M',
      node_args: '--max-old-space-size=96',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
    },
  ],
};
