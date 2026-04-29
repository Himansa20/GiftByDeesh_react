#use the base image from docker hib
FROM node:20-alpine
#set working directory
WORKDIR /app

#copy package .json and package-lock.json files
COPY package*.json ./

#install the dependancies
RUN npm install

#coppy the rest of files
COPY . .

#expose the port your app will runing
EXPOSE 5173

#start the application
CMD [ "npm","run", "dev" ]



