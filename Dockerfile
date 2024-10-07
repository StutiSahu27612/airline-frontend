# Use Nginx as the production server
FROM nginx:latest as prod

# Copy the built React app to Nginx's web server directory
COPY /build /usr/share/nginx/html

# Copy the configuration file to Nginx's web server directory
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
# EXPOSE 80

# Start Nginx when the container runs
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]



# ########### NODE STAGE #################

# # Use the official Node.js runtime as the base image
# FROM node:latest as build-stage

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json to the working directory
# COPY package.json .

# # Install dependencies
# RUN npm install 

# # Copy entire appliaction
# COPY . .

# # Build the React app for production
# RUN npm run build


# ########### NGINX STAGE #################

# # Use Nginx as the production server
# FROM nginx:1.23-alpine

# # Set the working directory in the container
# WORKDIR /usr/share/nginx/html

# # Remove default nginx static assest
# RUN rm -rf ./*

# # Copy the built React app to Nginx's web server directory
# COPY --from=build-stage /app/build .

# # Expose port 80 for the Nginx server
# # EXPOSE 80 3000

# # Start Nginx when the container runs
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
