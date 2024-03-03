FROM node:20.11.0 AS base
COPY --chown=0 package.json package-lock.json ./

FROM base AS base-dev
RUN apt-get update && apt-get install -y --no-install-recommends
RUN npm i

CMD ["npm", "start"]
