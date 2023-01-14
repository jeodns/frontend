FROM node:18-alpine AS builder
COPY . /app
RUN cd /app && \
	npm install && \
	npm run build

FROM nginx:1-alpine
COPY --from=builder /app/dist /usr/share/nginx/html