FROM node:16

#create App directory
WORKDIR = /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install && npm cache clean --force
RUN npm install -g nodemon dotenv


#COPY src ./src
#COPY .env ./
COPY tsconfig.json ./
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "nodemon", "src/index.ts" ]