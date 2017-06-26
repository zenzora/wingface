FROM node:latest
RUN mkdir -p /home/web
COPY public /home/web/public/
COPY src /home/web/src/
COPY *.json /home/web/
WORKDIR "/home/web"
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ]