# Use an official Node.js image as the base image
FROM node:14
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .
# Expose the port the app runs on
EXPOSE 3000
# Define the command to run the application
#CMD ["node", "app.js"]
# Define the entrypoint
#ENTRYPOINT ["npm", "start"]

CMD ["node","app.js"]
#ENTRYPOINT ["node","app.js"]

#the effective default entry point and command for a container based on your Dockerfile would be:

#Entry Point: /bin/sh -c (default)
#Command: ["node", "app.js"]
#This means that when you run a container using this image, Docker will start /bin/sh -c "node app.js" as the command. The /bin/sh -c shell is responsible for executing the command specified in CMD, which in your case is node app.js.

#The ENTRYPOINT specifies a command that will always be executed when the container starts. The CMD specifies arguments that will be fed to the ENTRYPOINT.
#ENTRYPOINT ["node"]

#docker run my-express-app app1.js - Here, app1.js will override the CMD specified in the Dockerfile.

#docker run --entrypoint /bin/bash -it my-node-app
#This will start a bash shell in the container instead of running npm start.
#Once you are inside the container, you can run any commands you need. For example, you can start the Node.js application manually:


#node app.js
#You can also inspect the file system, install additional software, or debug your application.

#Exit the Interactive Shell
#To exit the interactive shell, simply type exit and press Enter:

#exit

#The -it option in the docker run command is used to run a container in interactive mode with a pseudo-TTY (teletypewriter). This is useful when you need to interact with the container via a command-line interface, such as a shell.