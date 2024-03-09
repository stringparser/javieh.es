FROM node:20.11.0
COPY --chown=0 package.json package-lock.json ./
RUN apt-get update && apt-get install -y --no-install-recommends
RUN npm i

CMD ["npm", "start"]
