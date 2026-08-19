FROM node:22-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM node:22-slim

WORKDIR /app

COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev

COPY server ./server
COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
ENV PORT=3007
EXPOSE 3007

VOLUME /app/server/data

CMD ["node", "server/index.js"]
