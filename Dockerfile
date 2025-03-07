FROM node:23-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .
COPY next.config.json .