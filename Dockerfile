# Use an official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the app's port
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
