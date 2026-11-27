
package com.example.shadowbase.contoller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.shadowbase.kafka.producer.ReplayRequestProducer;
import com.example.shadowbase.model.ReplayRequest;

@RestController
@RequestMapping("/api/replay")
public class ReplayRequestController {

    private final ReplayRequestProducer replayRequestProducer;

    public ReplayRequestController(
            ReplayRequestProducer replayRequestProducer) {
        this.replayRequestProducer = replayRequestProducer;
    }

    @PostMapping("/request")
    public ResponseEntity<String> sendReplayRequest(
            @RequestBody List<ReplayRequest> requests) {

        if (requests == null || requests.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body("Replay request list cannot be empty");
        }

        Set<String> replayIds = new HashSet<>();

      
        for (ReplayRequest request : requests) {

            if (request == null ||
                isBlank(request.getReplayId()) ||
                isBlank(request.getMigrationId()) ||
                isBlank(request.getSchemaName()) ||
                isBlank(request.getStatus())) {

                return ResponseEntity.badRequest()
                        .body("All replay request fields are required");
            }

            if (!"REPLAY_REQUESTED".equals(request.getStatus())) {
                return ResponseEntity.badRequest()
                        .body("Invalid replay status");
            }

            if (!replayIds.add(request.getReplayId())) {
                return ResponseEntity.badRequest()
                        .body("Duplicate replay ID: " + request.getReplayId());
            }
        }

        // Send only after validation succeeds
        for (ReplayRequest request : requests) {
            replayRequestProducer.sendReplayRequest(request);
        }

        return ResponseEntity.ok(
                requests.size() + " replay requests submitted to Kafka"
        );
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }
}
