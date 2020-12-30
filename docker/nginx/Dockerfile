FROM nginx:alpine

RUN apk --update --no-cache add certbot tzdata openrc

RUN cp /usr/share/zoneinfo/Europe/Kiev /etc/localtime \
&& echo "Europe/Kiev" > /etc/timezone

WORKDIR /var/www

CMD ["nginx"]

EXPOSE 80 443