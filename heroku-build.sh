#! /bin/sh
yarn global add react-scripts
yarn install --production

cd ./frontend
yarn install --production
yarn build

cd ../
mv ./frontend/build/* ./public
node ./docker/deploy.js
