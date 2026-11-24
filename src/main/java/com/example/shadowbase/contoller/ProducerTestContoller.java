package com.example.shadowbase.contoller;
import org.springframework.web.bind.annotation.*;

import com.example.shadowbase.model.MigrationEvent;
import com.example.shadowbase.kafka.producer.MigrationEventProducer;

@RestController
@RequestMapping("/api/kafka")

public class ProducerTestContoller {

	    private final MigrationEventProducer producer;

	    public ProducerTestContoller(MigrationEventProducer producer) {
	        this.producer = producer;
	    }

	    @PostMapping("/send")
	    public String sendEvent() {

	        MigrationEvent event = new MigrationEvent(
	                "MIG-001",
	                "employee",
	                "V1",
	                "V2",
	                "MIGRATION_STARTED"
	        );

	        producer.sendMigrationEvent(event);

	        return "Migration event submitted to Kafka";
	    }
	}

