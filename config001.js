// An example configuration file.
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
directConnect: true,

   //directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: [
      //  'input_spec.js',
        //'mat_paginator_spec.js',
        'linearChar.js',

    ],
	
    // Disable promise manager because we are going to use async/await
    SELENIUM_PROMISE_MANAGER: false,
  
    // Options to be passed to Jasmine.
    //useAllAngular2AppRoots: true,
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
};
