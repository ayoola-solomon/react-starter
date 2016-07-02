FROM node:6.2

MAINTAINER Ayoola Solomon <ayoola.solomon89@gmail.com>

USER root

WORKDIR /usr/src/app

ENV HOST 0.0.0.0
ENV PORT 3000

CMD ["./entrypoint.sh"]
