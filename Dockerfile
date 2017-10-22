FROM node:8.1

ENV HOME=/usr/src/app
RUN mkdir $HOME
WORKDIR $HOME

USER root

RUN npm install --quiet --no-progress -g @angular/cli@latest --unsafe
RUN npm cache clean --force
# RUN npm install -g @angular/cli --unsafe
COPY ./package.json /usr/src/app
COPY ./angular-cli.json /usr/src/app
COPY ./protractor.conf.js /usr/src/app
COPY ./karma.conf.js /usr/src/app

RUN export PATH=/usr/local/lib/node_modules/lib/node_modules/@angular/cli/bin:$PATH
RUN npm install
RUN mkdir -p /usr/src/app/src
RUN mkdir -p /usr/src/app/dist/build


EXPOSE 4200
EXPOSE 49153