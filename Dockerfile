# Specify the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN chmod +x ./entrypoint.sh 

# Expose the port that the application listens on
EXPOSE 3000

# Start the application
CMD ["./entrypoint.sh"]