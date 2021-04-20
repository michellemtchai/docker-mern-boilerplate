#! /bin/sh
yarn global add react-scripts

cd ./frontend
yarn install --production
yarn build

cd ../
mv ./frontend/build/* ./public
node /app/deploy/build-frontend.js
