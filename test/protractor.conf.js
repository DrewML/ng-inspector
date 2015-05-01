var JSONReporter = require('jasmine-json-test-reporter');
var format = require('util').format;

exports.config = {
  allScriptsTimeout: 2500,

  params: {
    angularVersion: '1.3.0'
  },

  framework: 'jasmine2',

  onPrepare: function() {
    browser.getProcessedConfig().then(function(config) {
      jasmine.getEnv().addReporter(new JSONReporter({
        file: format('test/e2e/test-results/%s.json', config.params.angularVersion)
      }));
    });
  },

  rootElement: 'div.angular-root-element',

  specs: [
    'e2e/specs/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000/app/',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};