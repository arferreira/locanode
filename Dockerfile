FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

RUN npm uninstall bcrypt

#Solve the problem reinstaling bcrypt
CMD [ "npm", "uninstall", "bcrypt" ]
CMD [ "npm", "install", "bcrypt" ]

COPY . .

EXPOSE 3333

CMD ["npm", "run","dev"]