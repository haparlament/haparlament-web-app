FROM alpine:3.17.2
WORKDIR .
COPY ./haparlament ./haparlament
RUN apk add --no-cache bash
EXPOSE 8080
ENTRYPOINT ["./haparlament"]
