FROM node


RUN mkdir -p /home/app/


WORKDIR /home/app/

RUN npm i

COPY ./ /home/app/

CMD ["npm", "run", "dev"]

EXPOSE 3000

