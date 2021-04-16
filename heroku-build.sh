#! /bin/sh
cp ./docker/prod.env .env

yarn global add react-scripts
yarn install --production

cd ./frontend
yarn install --production
yarn build

cd ../
mv ./frontend/build/* ./public
node ./docker/deploy.js
export APP_ENV=production
export APP_HOST=0.0.0.0
export APP_PUBLIC_URL=/assets
export APP_START_URL=/
export APP_SERVER_CONSOLE_LOG=0
rm .env
