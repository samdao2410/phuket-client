# Stage 1: Building the code
FROM mhart/alpine-node AS builder

WORKDIR /app

COPY package.json yarn.lock ./

# RUN yarn install --frozen-lockfile
RUN yarn install

COPY . .

RUN yarn build
# RUN yarn install --production --frozen-lockfile
RUN yarn install --production


# Stage 2: And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:slim As production

WORKDIR /app

COPY package.json next.config.js next-i18next.config.js .env* ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/locales ./locales
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 6100

CMD ["node_modules/.bin/next", "start"]