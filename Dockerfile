FROM node:21-alpine3.18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "node", "server.js", "--allow-discovery=true"]