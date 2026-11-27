# ShadowBase – Zero-Downtime Schema Migration Sandbox

## Project Overview

ShadowBase is a backend application designed to generate API traffic, process events using Apache Kafka, and support API replay and validation. It helps simulate traffic, test API integrations, and validate system behavior during traffic processing.

## Technologies Used

- **Backend:** Java, Spring Boot
- **Messaging:** Apache Kafka
- **API Testing:** Postman
- **Build Tool:** Maven
- **Version Control:** Git and GitHub
- **Database:** MySQL

## ✨ Key Features

- Kafka Producer and Consumer implementation.
- API traffic generation for testing.
- Event processing using Kafka topics.
- Replay request publishing through Kafka.
- Bulk replay request submission.
- Input validation and error handling.
- Integration testing and message flow verification.
- Backend REST API integration.

## ⚙️ Prerequisites

Make sure you have installed:

- Java JDK 17 or compatible project version
- Apache Maven
- Apache Kafka
- MySQL
- Eclipse IDE or IntelliJ IDEA
- Postman

## My Contribution – Bhumika

### Week 3 – Traffic Pipeline

**1. Kafka Producer–Consumer Integration**
- Integrated Spring Boot with Apache Kafka.
- Configured Kafka producer and consumer.
- Created the `schema-migration-events` topic.
- Implemented migration event publishing and consumption.
- Configured JSON serialization and deserialization.

**2. Migration Traffic Generation**
- Developed a traffic generator to produce migration events.
- Implemented random schema selection and version transitions.
- Generated migration IDs for events.
- Created a REST endpoint to trigger traffic generation.
- Tested generation of 100, 500, and 1,000 migration events.

**3. Replay Request Producer**
- Created the `ReplayRequest` model.
- Implemented `ReplayRequestProducer`.
- Created the `replay-requests` Kafka topic.
- Published replay requests as JSON messages.

**4. Replay Request REST API**
- Developed `ReplayRequestController`.
- Implemented single and bulk replay request submission.
- Integrated the REST API with the Kafka producer.

**5. Input Validation and Error Handling**
- Validated required replay request fields.
- Rejected empty request lists.
- Prevented duplicate replay IDs within the same batch.
- Validated replay request status.
- Returned appropriate HTTP 400 responses for invalid requests.

**6. Testing and Verification**
- Tested REST APIs using Postman.
- Verified migration event flow through Kafka.
- Tested bulk replay request submission.
- Verified replay messages using the Kafka console consumer.
- Tested valid and invalid replay requests.

## Project Status

Currently under development. Traffic Pipeline implementation and testing are completed. Replay Engine integration and other team components are being developed collaboratively.

##  Team Project

Developed collaboratively using GitHub with individual branches for team members.
