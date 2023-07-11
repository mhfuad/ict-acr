module.exports = {
<<<<<<< HEAD
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
=======
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
  
>>>>>>> 166d698ffbdbfe08f0cd455693f8ee6d17e10ba8
