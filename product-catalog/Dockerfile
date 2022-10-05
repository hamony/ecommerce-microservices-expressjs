FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --force
RUN npm install -g sequelize-cli

# Bundle app source
COPY . .
EXPOSE 8080
CMD ["npm", "start"]