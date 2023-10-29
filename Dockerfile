FROM python:3.8.10-alpine
RUN mkdir app
WORKDIR app
COPY . .
EXPOSE 8007
CMD [ "python3", "-m", "http.server", "8007" ]