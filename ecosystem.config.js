module.exports = {
  apps: [
    {
      name: 'Daelimi',
      exec_mode: 'cluster',
      instances: 2,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env_production: {
        HOST: '0.0.0.0',
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ]
}