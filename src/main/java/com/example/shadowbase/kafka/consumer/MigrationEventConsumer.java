package com.example.shadowbase.kafka.consumer;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.example.shadowbase.model.MigrationEvent;

@Service
public class MigrationEventConsumer {


    @KafkaListener(
        topics = "schema-migration-events",
        groupId = "shadowbase-group"
    )
    public void consumeMigrationEvent(MigrationEvent event) {

        System.out.println("========== KAFKA EVENT RECEIVED ==========");

        System.out.println("Migration ID: " + event.getMigrationId());
        System.out.println("Schema Name: " + event.getSchemaName());
        System.out.println("Old Version: " + event.getOldVersion());
        System.out.println("New Version: " + event.getNewVersion());
        System.out.println("Status: " + event.getStatus());

        System.out.println("==========================================");
    }
}

