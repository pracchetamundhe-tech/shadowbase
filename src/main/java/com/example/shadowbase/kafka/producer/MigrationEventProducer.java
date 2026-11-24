package com.example.shadowbase.kafka.producer;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.example.shadowbase.model.MigrationEvent;

@Service
public class MigrationEventProducer {

    private static final String TOPIC =
            "schema-migration-events";

    private final KafkaTemplate<String, MigrationEvent> kafkaTemplate;

    public MigrationEventProducer(
            KafkaTemplate<String, MigrationEvent> kafkaTemplate) {

        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMigrationEvent(MigrationEvent event) {

        kafkaTemplate.send(
                TOPIC,
                event.getMigrationId(),
                event
        ).whenComplete((result, exception) -> {

            if (exception == null) {
                System.out.println(
                    "Migration event sent successfully: "
                    + event.getMigrationId()
                );
            } else {
                System.err.println(
                    "Failed to send migration event: "
                    + exception.getMessage()
                );
            }
        });
    }
}

