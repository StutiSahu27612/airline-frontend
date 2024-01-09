# Use the official Node.js runtime as the base image
FROM node as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# COPY packag?e*.json ./

# Install dependencies
# RUN npm install 

# Copy entire appliaction
COPY . .

# Install dependencies
RUN npm install

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80 3000

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]