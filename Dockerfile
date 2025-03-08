# Use official Node.js image
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package.json package-lock.json ./ 

# Install dependencies
RUN npm install 
RUN npm i -D @testing-library/react
RUN npm i -D jsdom
RUN npm i -D @testing-library/jest-dom

# Copy the rest of the project files
COPY . .

# Build the Next.js application
RUN npm run build

# Start the Next.js app
CMD ["npm", "run", "start"]
