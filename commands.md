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