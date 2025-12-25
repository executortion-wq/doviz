# Temel Node.js image
FROM node:18

WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY . .

EXPOSE 3000

CMD ["node", "backend/index.js"]
