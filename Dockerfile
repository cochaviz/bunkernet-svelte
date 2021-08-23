FROM node
COPY bunkernet/ /tmp/bunkernet/
EXPOSE 3000

ENV PORT=3000 
ENV HOST=127.0.0.1

# Build and set up
RUN cd /tmp/bunkernet && \
    npm install && \
    npm run build && \
    mkdir -p /var/www/app && \
    mv build/* /var/www/app/ && \
    mv package.json /var/www/app/

# Run
CMD node /var/www/app/index.js

