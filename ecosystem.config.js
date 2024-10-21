module.exports = {
    apps: [
      {
        name: "client",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
          PORT: 3007       }
      }
    ]
  };