exports.config = {
    allScriptsTimeout: 11000,
    specs: [
      './src/**/*.e2e-spec.ts'
    ],
    capabilities: {
      'browserName': 'chrome'
    },
    directConnect: false,
    baseUrl: 'http://localhost:4200/',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function() {}
    },
    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json')
      });
      jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
  };