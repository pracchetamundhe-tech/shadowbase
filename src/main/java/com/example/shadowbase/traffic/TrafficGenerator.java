
package com.example.shadowbase.traffic;

import java.util.Random;

import org.springframework.stereotype.Service;

import com.example.shadowbase.kafka.producer.MigrationEventProducer;
import com.example.shadowbase.model.MigrationEvent;

@Service
public class TrafficGenerator {

    private final MigrationEventProducer producer;
    private final Random random = new Random();

    private final String[] schemas = {
        "employee", "student", "department", "orders", "products"
    };

    public TrafficGenerator(MigrationEventProducer producer) {
        this.producer = producer;
    }

    public void generateTraffic(int count) {

        for (int i = 1; i <= count; i++) {

            String schemaName = schemas[random.nextInt(schemas.length)];

            int oldVersion = random.nextInt(3) + 1;
            int newVersion = oldVersion + 1;

            MigrationEvent event = new MigrationEvent(
                "MIG-" + i,
                schemaName,
                "V" + oldVersion,
                "V" + newVersion,
                "MIGRATION_STARTED"
            );

            producer.sendMigrationEvent(event);
        }

        System.out.println(count + " migration events generated.");
    }
}
