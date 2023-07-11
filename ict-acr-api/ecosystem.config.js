module.exports = {
  apps: [
    {
      name: 'ict-acr-api',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './src/index.js',
      args: 'start',
      env: {
     	 NODE_ENV: "production",
     	 PORT: 8000,
      }
    }
  ]
}
