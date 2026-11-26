package com.example.shadowbase.contoller;
import org.springframework.web.bind.annotation.*;

import com.example.shadowbase.traffic.TrafficGenerator;

@RestController
@RequestMapping("/api/kafka")
public class TrafficGeneratorController {


    private final TrafficGenerator trafficGenerator;

    public TrafficGeneratorController(TrafficGenerator trafficGenerator) {
        this.trafficGenerator = trafficGenerator;
    }

    @PostMapping("/generate")
    public String generateTraffic(@RequestParam(defaultValue = "100") int count) {
        trafficGenerator.generateTraffic(count);
        return count + " migration events sent to Kafka";
    }
}



