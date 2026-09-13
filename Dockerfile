FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
RUN NEXT_PUBLIC_WEBSITE_URL=${NEXT_PUBLIC_WEBSITE_URL} npm run build

FROM node:22-alpine

RUN apk --no-cache add tzdata

WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
