module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
    },
  ],
  // Deployment Configuration
  deploy: {
    production: {
      user: "virt104534",
      host: ["laulumarjad.ee"],
      ref: "origin/main",
      repo: "git@github.com:raunotal/laulumarjad-api.git",
      ssh_options: ["ForwardAgent=yes"],
      path: "/data01/virt104534/deploy/laulumarjad-api",
      "post-deploy": "pm2 reload /data01/virt104534/deploy/laulumarjad-api/current/ecosystem.config.js"
    },
  },
};
