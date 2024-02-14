# Base image
FROM node:20.11.0-alpine3.18 as build

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
# COPY .env* ./

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
# EXPOSE 3400

# Start the server using the production build
CMD ["npm", "run", "start:prod"]