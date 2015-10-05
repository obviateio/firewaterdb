FROM meteorhacks/meteord:base
MAINTAINER Jon Davis <jon@snowulf.com>

ONBUILD COPY ./.meteor/docker-platforms ./.meteor/platforms
ONBUILD COPY ./ /app
ONBUILD RUN bash $METEORD_DIR/on_build.sh

# ENV MONGO_URL="mongodb://url" MONGO_OPLOG_URL="mongodb://oplog_url" ROOT_URL="http://yourapp.com"
