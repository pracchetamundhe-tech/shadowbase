package com.example.shadowbase.traffic;
import org.springframework.stereotype.Service;

import com.example.shadowbase.kafka.producer.MigrationEventProducer;
import com.example.shadowbase.model.MigrationEvent;

@Service
public class TrafficGenerator {

    private final MigrationEventProducer producer;

    public TrafficGenerator(MigrationEventProducer producer) {
        this.producer = producer;
    }

    public void generateTraffic(int count) {

        for (int i = 1; i <= count; i++) {

            MigrationEvent event = new MigrationEvent(
                "MIG-" + i,
                "employee",
                "V1",
                "V2",
                "MIGRATION_STARTED"
            );

            producer.sendMigrationEvent(event);
        }

        System.out.println(count + " migration events generated.");
    }
}

