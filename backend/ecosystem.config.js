module.exports = {
  apps: [
    {
      name: "backend",
      script: "dist/main.js",
      cwd: "C:/Users/Woobo_1017/Desktop/aseong/backend",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "local",
        PORT: 8080,
        DB_HOST: "localhost",
        DB_PORT: 3306,
        DB_USERNAME: "WBEarly",
        DB_PASSWORD: "#woobosys@early!",
        DB_DATABASE: "anseong"
      }
    }
  ]
};
