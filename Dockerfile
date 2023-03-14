FROM node
RUN mkdir -p /home/app/
WORKDIR /home/app/
COPY ./ /home/app/
RUN npm i

CMD ["npm", "run", "dev"]
EXPOSE 3000

