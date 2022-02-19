FROM node:16.14-alpine
WORKDIR /se-intership
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]