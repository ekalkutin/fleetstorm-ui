FROM node:22.17.1 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22.17.1 AS builder
WORKDIR /app
COPY ./ ./
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build:client

FROM nginx:alpine
COPY --from=builder /app/build/client /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]