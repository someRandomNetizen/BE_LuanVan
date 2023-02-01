# Step 0: Create base image
FROM node:14-alpine as baseImage
RUN apk update \
    && apk add g++ make py3-pip build-base

# Step 1: Build the binary file
FROM baseImage as development

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 2: Build environment for prod running
FROM baseImage as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
