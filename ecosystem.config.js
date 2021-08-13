module.exports = {
  apps: [
    {
      name: 'Daelimi',
      exec_mode: 'cluster',
      instances: 2,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        HOST: '0.0.0.0',
        PORT: 3000,
        NODE_ENV: 'development'
      }
    }
  ]
}