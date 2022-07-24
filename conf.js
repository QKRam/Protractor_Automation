// An example configuration file.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  
  specs: ['callObj.js',
  
  'example_spec.js'

   ],

  //  suite :
  //  { //Created object 
  //      smoke:[ 'test1.js'],
 
  //  },

  onPrepare: function() {
                jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
                                         })
                                              )
  },

 
//Suite Prepareatob
// suite:{
// //If you want to run any specific regression we can list here 

// smoke:['./test1.js',
// 'linearChar.js'],
// },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
