FROM node
COPY bunkernet/ /tmp/bunkernet/
EXPOSE 3000

ENV PORT=3000 
ENV HOST=0.0.0.0

# Build and set up
RUN cd /tmp/bunkernet && \
    npm install && \
    npm run build && \
    mkdir -p /var/www/app && \
    mv * /var/www/app/

# Run
CMD cd /var/www/app && node build/index.js --host

