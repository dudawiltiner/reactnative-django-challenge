FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install -g expo-cli && npm install -g @expo/ngrok@^4.1.0

RUN npm install
# Bundle app source
COPY .expo .

CMD expo start --tunnel
