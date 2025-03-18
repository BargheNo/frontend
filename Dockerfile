# Use official Node.js image
FROM node:23

# Install required dependencies for TailwindCSS
RUN apt-get update && apt-get install -y build-essential python3

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package.json package-lock.json ./ 

# Install dependencies
RUN npm uninstall tailwindcss --legacy-peer-deps
RUN rm -rf node_modules package-lock.json
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build the Next.js application
RUN npm run build

# Start the Next.js app
CMD ["npm", "run", "start"]
