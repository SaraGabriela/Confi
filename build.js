const Metro = require('metro');
Metro.loadConfig().then(async config => {
  Metro.runBuild(config, {
    entry: './src/javascript.js',
    out: './dist/javascript.js'
  });
});