package com.example.shadowbase.kafka.producer;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.example.shadowbase.model.ReplayRequest;

@Service
public class ReplayRequestProducer {

    private static final String TOPIC = "replay-requests";

    private final KafkaTemplate<String, ReplayRequest> kafkaTemplate;

    public ReplayRequestProducer(
            KafkaTemplate<String, ReplayRequest> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendReplayRequest(ReplayRequest request) {

        kafkaTemplate.send(
                TOPIC,
                request.getReplayId(),
                request
        ).whenComplete((result, exception) -> {

            if (exception == null) {
                System.out.println(
                    "Replay request sent successfully: "
                    + request.getReplayId()
                );
            } else {
                System.err.println(
                    "Failed to send replay request: "
                    + exception.getMessage()
                );
            }
        });
    }
}

