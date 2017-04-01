### Proselytize
PDF and HTML document-to-text conversion queuing service
### Setup
#### dependencies
* MongoDB - ensure you have a mongo server running
* Node - ensure you have node version 7.8.0 installed
#### OSX / Linux
1. clone the repo to a suitable directory
2. cd into the directory
3. npm install -g gulp bower
4. npm install
5. bower install
6. ensure you know your mongo db url and the port you want to run the server on and pass them as environment variables:

  MONGO_URL=mongo_db_url \
  EXPRESS_PORT=server_port \
  NODE_ENV=production \
  npm run build && npm start
#### Docker
1. docker build -t proselytize:latest .
2. docker run \
  -d -p server_address:8080 \
  -e NODE_ENV=production \
  -e MONGO_URL=mongo_db_url \
  proselytize
