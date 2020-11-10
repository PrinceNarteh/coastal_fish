FROM node:10

WORKDIR '/app/web-ui'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]