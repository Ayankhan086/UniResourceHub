# Server/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Generate Prisma Client (if you are using Prisma)
RUN npx prisma generate

# Copy the rest of the application
COPY . .

RUN apk --no-cache add curl

# Expose the port your server runs on (e.g., 5000 or 8080)
EXPOSE 5000

# Command to run the server
CMD ["node", "Server.js"]
