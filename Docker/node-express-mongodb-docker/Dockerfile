# Use the official Node.js image as a base
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Expose port (if different from .env, adjust here)
EXPOSE 3000

# Command to run your application
CMD ["node", "app.js"]
