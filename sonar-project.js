const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'your-sonar-token',
    options: {
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.test.inclusions': 'src/**/*.test.js,src/**/*.test.jsx',
      'sonar.exclusions': 'src/index.js,src/reportWebVitals.js,src/setupTests.js,src/**/*.css,src/App.test.js',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.coverage.exclusions': 'src/index.js,src/reportWebVitals.js,src/setupTests.js,src/**/*.css,src/App.test.js'
    }
  },
  () => process.exit()
); 