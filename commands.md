Reference to deploy React JS app on App Engine(Standard Env) - https://github.com/mikesparr/app-engine-react-demo

<!------------------- To host this app on App Engine using VM  --------------------------------------------------->
mkdir test
git clone https://github.com/ashiphsayyad32/airline-frontend.git
cd /home/gcp11poc/test/airline-frontend
git checkout feature1
npm install typescript@4.9.5 --save-dev
npm install
npm ls typescript
rm -rf node_modules
rm package-lock.json
npm install
npm run build
<!-- To Deploy App on App Engine -->
gcloud app deploy --project=<GCP-project-ID> --quiet
<!-- To Delete the deployed app  -->
gcloud app services delete <service-name-given-in-app.yaml-file>

<!------------------- To run unit test cases  --------------------------------------------------->
npm run test:coverage

<!-- To clear cache -->
rm -rf node_modules
npm install
npx jest --clearCache


# Example CI pipeline steps
- name: Install dependencies
  run: npm install

- name: Run tests with coverage
  run: npm run test:coverage


Based on the configurations in package.json and sonar-project.properties, here are the paths where the reports are generated:
Code Coverage Reports:
coverage/lcov.info              # SonarQube uses this for code coverage
coverage/coverage-final.json    # JSON format coverage report
coverage/clover.xml            # XML format coverage report
coverage/lcov-report/index.html # HTML format coverage report (for viewing in browser)

Test Execution Report:
coverage/test-report.xml       # SonarQube uses this for test execution

