FROM ubuntu:20.04

RUN apt update; apt install curl -y;

WORKDIR "/root"

COPY . .

EXPOSE 25501

CMD ["./subconverter"]
