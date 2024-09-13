FROM openjdk:11-jdk-slim

WORKDIR /app

COPY target/SpringBoot-1.0-SNAPSHOT.jar /app

EXPOSE 8081

CMD ["java", "-jar", "SpringBoot-1.0-SNAPSHOT.jar"]

LABEL maintainer="Your Name <mariemjaziri55@gmail.com>"
LABEL version="1.0"
LABEL description="Docker image for Spring Boot Java 11 application"
