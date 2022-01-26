exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['/home/ubuntu/SDET/protractor/protractorDemo/test/calculator_spec.js'],
    specs: ['/home/ubuntu/SDET/protractor/protractorDemo/test/calc2_spec.js',
    '/home/ubuntu/SDET/protractor/protractorDemo/test/calculator_spec.js'],
    multiCapabilities: [{
    //     browserName: 'firefox'
    //   }, {
        browserName: 'chrome'
      }]
  }